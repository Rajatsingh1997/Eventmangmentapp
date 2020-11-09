import './App.css';
import Eventdetailform from "./components/Eventdetailform";
import { HashRouter, Route, Switch } from "react-router-dom";
import CalenderList from "./components/CalenderList";
// import Map from "./components/Map";

function App() {
  return (
    <>
    <HashRouter>
     <Switch>
      <Route path="/" exact component={Eventdetailform}/>
      <Route path="/calender" exact component={CalenderList}/>
    </Switch>
    </HashRouter>
    {/* <Map/> */}
    </>
  );
}

export default App;
