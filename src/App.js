import { useState, useEffect } from "react";
import "./App.css";
import Charecters from "./component/Charecters";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Charecters />
    </div>
  );
}

export default App;
