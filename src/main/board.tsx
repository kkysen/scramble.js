import {FC, useState} from "react";
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
        {[...word].map((letter, i) => <Letter
            key={i}
            letter={letter}
            selected={selectedIndex === i}
            setSelected={() => setSelectedIndex(i)}
        />)}
    </div>;
};

export const Board: FC<{
    words: ShuffledWords;
    wordChecker: WordChecker;
    Solution: FC<{
        solved: boolean;
        showSolution: () => void;
    }>;
}> = ({words: {solution, shuffled}, wordChecker: check, Solution}) => {
    const [{x, y, words, solved}, setState] = useState(() => {
        return {x: -1, y: -1, words: shuffled, solved: check.words(shuffled)};
    });
    
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
