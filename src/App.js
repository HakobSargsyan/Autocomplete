import './App.css';
import Autocomplete from "./components/organizms/AutoComplete/Autocomplete";
import Posts from "@components/organizms/Posts/Posts";
function App() {
    return (<div className='container'>
          <Autocomplete />
          <Posts />
      </div>);
}
export default App;
