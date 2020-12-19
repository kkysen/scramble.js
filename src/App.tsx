import "./App.css";
import {Board} from "./main/board";
import {BoardElement} from "./main/board_element";

function App() {
    return <div className="App">
        <div>
            <BoardElement board={Board.example()}/>
        </div>
    </div>;
}

export default App;
