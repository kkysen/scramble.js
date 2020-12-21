import {FC, useState} from "react";
import {WordChecker} from "./lexicon";

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
    startingWords: readonly string[];
    wordChecker: WordChecker,
    setSolved: (solved: boolean) => void,
}> = ({startingWords, wordChecker: check, setSolved}) => {
    const [{x, y, words}, setState] =
        useState({x: -1, y: -1, words: startingWords});
    
    function setIJ(i: number, j: number) {
        if (y === -1 || x === -1) {
            // no letters clicked on yet
            setState({x: i, y: j, words});
        } else if (x === i && y === j) {
            // clicked on same letter twice
            setState({x: -1, y: -1, words});
        } else {
            // one letter clicked on, so swap them now
            const splitWords = words.map(word => [...word]);
            const temp = splitWords[i][j];
            splitWords[i][j] = splitWords[x][y];
            splitWords[x][y] = temp;
            const newWords = splitWords.map(word => word.join(""));
            setState({x: -1, y: -1, words: newWords});
            setSolved(check.words(newWords));
        }
    }
    
    return <div style={{
        display: "table",
    }}>
        {words.map((word, i) => <Word
            key={i}
            word={word}
            isWord={check.word(word)}
            selectedIndex={i === x ? y : -1}
            setSelectedIndex={j => setIJ(i, j)}
        />)}
    </div>;
};
