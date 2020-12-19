import {FC} from "react";
import {Board} from "./board";

const Letter: FC<{letter: string}> = ({letter}) => {
    return <div style={{
        display: "table-cell",
        borderColor: "black",
        borderRadius: "1px",
    }}>
        {letter}
    </div>;
};

const Row: FC<{word: string}> = ({word}) => {
    return <div style={{
        display: "table-row",
    }}>
        {[...word].map((letter, i) => <Letter letter={letter} key={i}/>)}
    </div>;
};

export const BoardElement: FC<{board: Board}> = ({board}) => {
    return <div style={{
        display: "table",
    }}>
        {board.words.map((word, i) => <Row word={word} key={i}/>)}
    </div>;
};
