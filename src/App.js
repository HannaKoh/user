import logo from './logo.svg';
import './App.scss';
import Start from "./Component/start";
import {updateAreaLogin, updateAreaRegistration} from "./Component/redux/store";


const App = (props) => {
  return (
      <div className="App">
          <Start store={props.store} addUser={props.addUser}
                 updateAreaRegistration={props.updateAreaRegistration}
                 updateAreaLogin={props.updateAreaLogin}/>
      </div>
  );
}

export default App;
