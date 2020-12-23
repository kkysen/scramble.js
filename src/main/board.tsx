import {FC, useCallback, useEffect, useState} from "react";
import {ShuffledWords, WordChecker} from "./lexicon";

const Letter: FC<{
    letter: string;
    selected: boolean;
    setSelected: () => void,
}> = ({letter, selected, setSelected}) => {
    return <div
        onClick={setSelected}
        style={{
            display: "table-cell",
            borderColor: "black",
            borderRadius: "1px",
            backgroundColor: selected ? "yellow" : "white",
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
}> = ({word, isWord, selectedIndex, setSelectedIndex}) => {
    return <div style={{
        display: "table-row",
        fontWeight: isWord ? "bold" : "normal",
    }}>
        {[...word.toUpperCase()].map((letter, i) => <Letter
            key={i}
            letter={letter}
            selected={selectedIndex === i}
            setSelected={() => setSelectedIndex(i)}
        />)}
    </div>;
};

export interface SolutionProps {
    solved: boolean;
    showSolution: () => void;
}

export const Board: FC<{
    words: ShuffledWords;
    wordChecker: WordChecker;
    Solution: FC<SolutionProps>;
}> = ({words: {solution, shuffled}, wordChecker: check, Solution}) => {
    console.log(solution);
    
    const initState = useCallback(() => {
        return {x: -1, y: -1, words: shuffled, solved: check.words(shuffled)};
    }, [check, shuffled]);
    
    const [{x, y, words, solved}, setState] = useState(initState);
    
    useEffect(() => {
        setState(initState());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initState]);
    
    function setIJ(i: number, j: number) {
        if (y === -1 || x === -1) {
            // no letters clicked on yet
            setState({x: i, y: j, words, solved});
        } else if (x === i && y === j) {
            // clicked on same letter twice
            setState({x: -1, y: -1, words, solved});
        } else {
            // one letter clicked on, so swap them now
            const splitWords = words.map(word => [...word]);
            const temp = splitWords[i][j];
            splitWords[i][j] = splitWords[x][y];
            splitWords[x][y] = temp;
            const newWords = splitWords.map(word => word.join(""));
            setState({x: -1, y: -1, words: newWords, solved: check.words(newWords)});
        }
    }
    
    return <>
        <div style={{
            display: "table",
        }}>
            {words.map((word, i) => <Word
                key={i}
                word={word}
                isWord={check.word(word)}
                selectedIndex={i === x ? y : -1}
                setSelectedIndex={j => setIJ(i, j)}
            />)}
        </div>
        <Solution
            solved={solved}
            showSolution={() => setState({x: -1, y: -1, words: solution, solved: true})}
        />
    </>;
};
