import {FC, useState} from "react";
import {Board} from "./board";
import {Lexicon} from "./lexicon";


export const Game: FC<{
    lexicon: Lexicon,
    size: number,
}> = ({lexicon, size}) => {
    const words = lexicon.randomWords(size);
    const [solved, setSolved] = useState(lexicon.checkWords(words));
    
    return <div>
        <Board
            startingWords={lexicon.randomWords(size)}
            checkWords={words => {
                console.log(words);
                setSolved(lexicon.checkWords(words));
            }}
        />
        <div>
            {solved && "Done!"}
        </div>
    </div>;
};
