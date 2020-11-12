import "./App.css";
import Eventdetailform from "./components/Eventdetailform";
import { HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Eventdetailform} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
