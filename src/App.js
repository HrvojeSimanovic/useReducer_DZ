import React from "react";

import VjezbaSwitch from "./components/VjezbaSwitch";
import ReducerGlupi from "./components/ReducerGlupi";
import ReducerPametni from "./components/ReducerPametni";
import UseContextGlupi from "./components/UseContextGlupi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseContextGlupi />
      <hr />
      <ReducerPametni />
      <hr />
      <ReducerGlupi />
      <hr />
      <VjezbaSwitch />
    </div>
  );
}

export default App;
