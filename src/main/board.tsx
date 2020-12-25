import {FC, useCallback, useEffect, useState} from "react";
import {ShuffledWords, WordChecker} from "./lexicon";

const Letter: FC<{
    letter: string;
    selected: boolean;
    setSelected: () => void;
    isWord: boolean;
    boardSize: number;
}> = ({letter, selected, setSelected, isWord, boardSize}) => {
    const size = ((): (n: number) => number => {
        // we want to pin these two scales and adjust in-between
        // use point-slope form to calculate scale
        interface Point {
            readonly boardSize: number;
            readonly scale: number;
        }
        
        const a: Point = {boardSize: 5, scale: 1};
        const b: Point = {boardSize: 25, scale: 2};
        const slope = (a.scale - b.scale) / (a.boardSize - b.boardSize);
        const scale = slope * (boardSize - a.boardSize) + a.scale;
        return n => n / scale;
    })();
    
    return <div
        onClick={setSelected}
        style={{
            backgroundColor: selected ? "yellow" : "white",
            padding: `${size(1)}%`,
            margin: `${size(0.2)}%`,
            width: `${size(3)}%`,
            fontSize: `${size(3)}vw`,
            borderWidth: `${size(1)}vw`,
            borderStyle: selected ? "inset" : "outset",
            borderRadius: isWord ? `${size(2)}vw` : 0,
            textAlign: "center",
        }}
    >
        {letter}
    </div>;
};

const Word: FC<{
    word: string;
    isWord: boolean;
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    boardSize: number;
}> = ({word, isWord, selectedIndex, setSelectedIndex, boardSize}) => {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        fontWeight: isWord ? "bold" : "normal",
    }}>
        {[...word.toUpperCase()].map((letter, i) => <Letter
            key={i}
            letter={letter}
            selected={selectedIndex === i}
            setSelected={() => setSelectedIndex(i)}
            isWord={isWord}
            boardSize={boardSize}
        />)}
    </div>;
};

export interface SolutionProps {
    solved: boolean;
    showingSolution: boolean;
    showSolution: () => void;
    numMoves: number;
}

export const Board: FC<{
    words: ShuffledWords;
    wordChecker: WordChecker;
    Solution: FC<SolutionProps>;
}> = ({words: {solution, shuffled}, wordChecker: check, Solution}) => {
    console.log(solution);
    
    const initState = useCallback(() => {
        return {x: -1, y: -1, words: shuffled, solved: check.words(shuffled), numMoves: 0};
    }, [check, shuffled]);
    
    const [{x, y, words, solved, numMoves}, setState] = useState(initState);
    const showingSolution = words === solution;
    
    useEffect(() => {
        setState(initState());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initState]);
    
    function setIJ(i: number, j: number) {
        if (y === -1 || x === -1) {
            // no letters clicked on yet
            setState({x: i, y: j, words, solved, numMoves});
        } else if (x === i && y === j) {
            // clicked on same letter twice
            setState({x: -1, y: -1, words, solved, numMoves});
        } else {
            // one letter clicked on, so swap them now
            const splitWords = words.map(word => [...word]);
            const temp = splitWords[i][j];
            splitWords[i][j] = splitWords[x][y];
            splitWords[x][y] = temp;
            const newWords = splitWords.map(word => word.join(""));
            setState({
                x: -1,
                y: -1,
                words: newWords,
                solved: check.words(newWords),
                numMoves: numMoves + 1,
            });
        }
    }
    
    return <>
        <div>
            {words.map((word, i) => <Word
                key={i}
                word={word}
                isWord={check.word(word)}
                selectedIndex={i === x ? y : -1}
                setSelectedIndex={j => setIJ(i, j)}
                boardSize={words.length}
            />)}
        </div>
        <Solution
            solved={solved}
            showingSolution={showingSolution}
            showSolution={() => setState({
                x: -1,
                y: -1,
                words: solution,
                solved: true,
                numMoves,
            })}
            numMoves={numMoves}
        />
    </>;
};
