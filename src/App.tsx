import "./App.css";
import {Game} from "./main/game";
import {Lexicon} from "./main/lexicon";

function App() {
    return <div className="App">
        <div>
            <Game lexicon={new Lexicon("English Sample", [
                "A",
                "HI",
                "TWO",
                "FOUR",
                "HELLO",
                "I",
                "HA",
                "AH",
            ])} size={5} timeInSeconds={Infinity}/>
        </div>
    </div>;
}

export default App;
