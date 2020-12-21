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
    word: readonly string[];
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}> = ({word, selectedIndex, setSelectedIndex}) => {
    return <div style={{
        display: "table-row",
    }}>
        {word.map((letter, i) => <Letter
            key={i}
            letter={letter}
            selected={selectedIndex === i}
            setSelected={() => setSelectedIndex(i)}
        />)}
    </div>;
};

export const Board: FC<{
    words: string[][];
}> = ({words}) => {
    const [[x, y], setXY] = useState([-1, -1]);
    
    function ij2xy(i: number, j: number): [number, number] {
        console.log({i, j, x, y});
        if (y === -1 || x === -1) {
            // no letters clicked on yet
            return [i, j];
        } else if (x === i && y === j) {
            // clicked on same letter twice
            return [-1, -1];
        } else {
            // one letter clicked on, so swap them now
            const temp = words[i][j];
            words[i][j] = words[x][y];
            words[x][y] = temp;
            return [-1, -1];
        }
    }
    
    return <div style={{
        display: "table",
    }}>
        {words.map((word, i) => <Word
            key={i}
            word={word}
            selectedIndex={i === x ? y : -1}
            setSelectedIndex={j => setXY(ij2xy(i, j))}
        />)}
    </div>;
};
