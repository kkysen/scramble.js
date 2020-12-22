import {FC, useState} from "react";
import {Board} from "./board";
import {Lexicon} from "./lexicon";


interface GameOptions {
    lexicon: Lexicon;
    size: number;
    timeInSeconds: number;
}

export const Game: FC<GameOptions> = ({lexicon, size, timeInSeconds}) => {
    const words = lexicon.randomShuffledWords(size);
    console.log(words.solution);
    return <div>
        <Board
            words={words}
            wordChecker={lexicon.wordChecker()}
            Solution={({solved, showSolution}) => <div>
                {solved ? "Done!" : <button onClick={showSolution}>Show Solution</button>}
            </div>}
        />
    </div>;
};

const NewGameChooser: FC<{
    options: GameOptions,
    setOptions: (options: GameOptions) => void,
}> = ({options, setOptions}) => {
    return <div>
        <button>Play Again!</button>
    </div>;
};

export const Games: FC<{}> = () => {
    const lexicon = new Lexicon("English Sample", [
        "A",
        "HI",
        "TWO",
        "FOUR",
        "HELLO",
        "I",
        "HA",
        "AH",
    ]);
    const [options, setOptions] = useState<GameOptions>({lexicon, size: 5, timeInSeconds: NaN});
    return <div>
    
    </div>;
};
