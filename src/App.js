import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
// import {renderRoutes} from "react-router-config";
// import routes from "./routes";
import './App.css';
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";

function App() {
  return (<div>
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>

  </div>)
}

export default App;
