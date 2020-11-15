import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"; 
import Home from "./route/Home";
import Registry from "./route/Registry";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        {/* match all the words after / */}
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/registry">
          <Registry />
        </Route>

      </Switch>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
