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
        return n => (n / scale) * 1.5;
    })();
    
    return <div
        onClick={setSelected}
        style={{
            backgroundColor: selected ? "yellow" : isWord ? "#13E049" : "white",
            color: selected ? "black" : isWord ? "red" : "black",
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
    shuffle: () => void;
}

export const Board: FC<{
    words: ShuffledWords;
    wordChecker: WordChecker;
    Solution: FC<SolutionProps>;
}> = ({words: shuffleWords, wordChecker: check, Solution}) => {
    const {solution, shuffled} = shuffleWords;
    
    const initState = useCallback((isFirst: boolean) => {
        return {isFirst, x: -1, y: -1, words: shuffled, solved: check.words(shuffled), numMoves: 0};
    }, [check, shuffled]);
    
    const [{isFirst, x, y, words, solved, numMoves}, setState] = useState(initState(true));
    const showingSolution = words === solution;
    
    function setWords(args: {words: readonly string[]; move: boolean, solved?: boolean}) {
        setState({
            isFirst: false,
            x: -1,
            y: -1,
            words: args.words,
            solved: args.solved ?? check.words(args.words),
            numMoves: numMoves + (args.move ? 1 : 0),
        });
    }
    
    useEffect(() => {
        if (!isFirst) {
            console.log(solution.join("\n"));
        }
    }, [isFirst, solution])
    
    useEffect(() => {
        setState(initState(false));
    }, [initState]);
    
    function setIJ(i: number, j: number) {
        if (y === -1 || x === -1) {
            // no letters clicked on yet
            setState({isFirst: false, x: i, y: j, words, solved, numMoves});
        } else if (x === i && y === j) {
            // clicked on same letter twice
            setWords({words, move: false, solved});
        } else {
            // one letter clicked on, so swap them now
            const splitWords = words.map(word => [...word]);
            const temp = splitWords[i][j];
            splitWords[i][j] = splitWords[x][y];
            splitWords[x][y] = temp;
            setWords({words: splitWords.map(word => word.join("")), move: true});
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
            showSolution={() => setWords({words: solution, move: false, solved: true})}
            numMoves={numMoves}
            shuffle={() => setWords({words: shuffleWords.shuffle(), move: false})}
        />
    </>;
};
