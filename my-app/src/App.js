import './App.css';
import Loading from "./components/Loading/Loading";
import DropDown from "./components/DropDown/DropDown";
import MenuItem from "./components/DropDown/MenuItem/MenuItem";

function App() {


    return (
        <div className="App">
            {/*<Loading/>*/}
            {/*<p className="title">Hello, cats</p>*/}
            <DropDown label='Choose city'/>

        </div>
    );
}

export default App;
