import {TaskList} from "../TaskList";
import "./App.css";
import Header, {MAIN_HEADER, SUB_HEADER} from "../Header";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header
                    headerText="Yet Another Task List"
                    headerType={MAIN_HEADER}
                />
            </header>

            {/* Render one TaskList Compoenent here */}
            <TaskList />
        </div>
    );
}

export default App;
