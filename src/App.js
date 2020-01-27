import React from "react";
import "./styles.css";
import Noty from "./Noty";
export default function App() {
  return (
    <div className="App">
      Hello
      <Noty width={"30px"} color={"#122C34"} count={10} />
    </div>
  );
}
