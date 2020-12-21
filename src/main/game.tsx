import {FC, useState} from "react";
import {Board} from "./board";
import {Lexicon} from "./lexicon";
import {shuffledString} from "./shuffle";


export const Game: FC<{
    lexicon: Lexicon,
    size: number,
}> = ({lexicon, size}) => {
    const solution = lexicon.randomWords(size);
    console.log(solution);
    const letters = shuffledString(solution.join(""));
    const startingWords = (() => {
        const words: string[] = [];
        let start = 0;
        for (let i = 1; i <= size; i++) {
            const end = start + i;
            words.push(letters.slice(start, end));
            start = end;
        }
        return words;
    })();
    const [solved, setSolved] = useState(lexicon.checkWords(startingWords));
    
    return <div>
        <Board
            startingWords={startingWords}
            checkWords={words => setSolved(lexicon.checkWords(words))}
        />
        <div>
            {solved && "Done!"}
        </div>
    </div>;
};
