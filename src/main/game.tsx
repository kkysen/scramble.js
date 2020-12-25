import fileSize from "filesize";
import {FC, useEffect, useState} from "react";
import {default as Dropdown} from "react-dropdown";
import "react-dropdown/style.css";
import {Board, SolutionProps} from "./board";
import {Lexicon} from "./lexicon";
import {LexiconHandle, lexicons} from "./lexicons";

interface GameOptions {
    lexicon: Lexicon;
    size: number;
}

const GameSolution: FC<SolutionProps> = ({solved, showSolution}) => <div>
    {solved ? "Done!" : <button onClick={showSolution}>Show Solution</button>}
</div>;

export const Game: FC<GameOptions> = ({lexicon, size}) => {
    const words = lexicon.randomShuffledWords(size);
    console.log(words.solution);
    return <div>
        <Board
            words={words}
            wordChecker={lexicon.wordChecker()}
            Solution={GameSolution}
        />
    </div>;
};

interface StartGameOptions {
    readonly again: boolean;
    readonly lexiconHandle: LexiconHandle;
    readonly size?: number;
}

const NewGameChooser: FC<{
    options?: GameOptions,
    setOptions: (options: GameOptions) => void,
}> = ({options, setOptions}) => {
    const starting = ((): StartGameOptions => {
        if (options) {
            return {
                again: true,
                ...options,
                lexiconHandle: options.lexicon.handle,
            };
        } else {
            return {
                again: false,
                lexiconHandle: lexicons.default(),
            };
        }
    })();
    
    const [lexiconHandle, setLexiconHandle] = useState(starting.lexiconHandle);
    const [lexicon, setLexicon] = useState(starting.lexiconHandle.getCached());
    const [size, setSize] = useState(starting.size);
    
    useEffect(() => {
        // so that an old chosen size doesn't go chosen with a wrong lexicon
        setSize(undefined);
        
        const newLexicon = lexiconHandle.get();
        if (newLexicon instanceof Promise) {
            newLexicon.then(setLexicon);
        } else {
            setLexicon(newLexicon);
        }
    }, [lexiconHandle]);
    
    useEffect(() => {
        if (lexicon) {
            lexicons.updateDefault(lexicon);
        }
    }, [lexicon]);
    
    console.log(lexicon);
    
    return <div>
        <button disabled={!(lexicon && size !== undefined)} onClick={() => {
            if (lexicon && size !== undefined) {
                setOptions({lexicon, size});
            } else {
                throw new Error(`impossible`);
            }
        }}>
            {`Play${starting.again ? " Again" : ""}!`}
        </button>
        <br/>
        <label>Lexicon</label>
        <Dropdown
            options={lexicons.iter().map(e => ({
                value: e.name,
                label: `${e.name} (${e.size.numWords} words, ${fileSize(e.size.numBytes)})`,
            })).toArray()}
            value={lexiconHandle.name}
            onChange={e => setLexiconHandle(lexicons.get(e.value))}
        />
        {lexicon && <>
            <label>Size</label>
            <Dropdown
                options={lexicon.consecutiveLengths().map(e => e.toString()).toArray()}
                value={size?.toString()}
                onChange={e => setSize(parseInt(e.value))}
            />
        </>}
    </div>;
};

export const Games: FC = () => {
    const [options, setOptions] = useState<GameOptions | undefined>();
    return <div>
        {options && <Game lexicon={options.lexicon} size={options.size}/>}
        <NewGameChooser options={options} setOptions={setOptions}/>
    </div>;
};
