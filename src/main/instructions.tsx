import {FC} from "react";

export const Instructions: FC = () => {
    return <div>
        <h1 style={{
            textAlign: "center"
        }}>
            Scramble
        </h1>
        <div style={{
            marginLeft: "20%",
            marginRight: "20%",
            minWidth: "20vw",
        }}>
            <h3>Instructions</h3>
            <p>
                Swap letters by tapping on a pair one by one
                in an effort to make a word on each line of the board.
            </p>
            <p>
                Note that you can select which lexicon (dictionary) the game will use.
            </p>
            <p>
                And don't forget to select the size of your board to start.
            </p>
        </div>
    </div>;
};
