import "./App.css";
import {Board} from "./main/board";

function App() {
    return <div className="App">
        <div>
            <Board words={[
                "A",
                "HI",
                "TWO",
                "FOUR",
                "HELLO",
            ].map(word => [...word])}/>
        </div>
    </div>;
}

export default App;
