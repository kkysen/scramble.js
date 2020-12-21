import {FC, useState} from "react";

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
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}> = ({word, selectedIndex, setSelectedIndex}) => {
    return <div style={{
        display: "table-row",
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
    checkWords: (words: readonly string[]) => void,
}> = ({startingWords, checkWords}) => {
    const [{x, y, words, check}, setState] =
        useState({x: -1, y: -1, words: startingWords, check: false});
    if (check) {
        checkWords(words);
    }
    
    function setIJ(i: number, j: number) {
        console.log({i, j, x, y});
        if (y === -1 || x === -1) {
            // no letters clicked on yet
            setState({x: i, y: j, words, check: false});
        } else if (x === i && y === j) {
            // clicked on same letter twice
            setState({x: -1, y: -1, words, check: false});
        } else {
            // one letter clicked on, so swap them now
            const splitWords = words.map(word => [...word]);
            const temp = splitWords[i][j];
            splitWords[i][j] = splitWords[x][y];
            splitWords[x][y] = temp;
            const newWords = splitWords.map(word => word.join(""));
            setState({x: -1, y: -1, words: newWords, check: true});
        }
    }
    
    return <div style={{
        display: "table",
    }}>
        {words.map((word, i) => <Word
            key={i}
            word={word}
            selectedIndex={i === x ? y : -1}
            setSelectedIndex={j => setIJ(i, j)}
        />)}
    </div>;
};
