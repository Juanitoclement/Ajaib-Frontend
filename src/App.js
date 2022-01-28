import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
