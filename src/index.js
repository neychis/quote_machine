import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";

import "./styles.css";

function App() {
  return (
    <section className="App">
      <Container />
    </section>
  );
}

const mainElement = document.getElementById("main");
ReactDOM.render(<App />, mainElement);
