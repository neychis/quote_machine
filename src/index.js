import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import quotes from "./quotes";

import "./styles.css";

function App() {
  const getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  return (
    <section className="App">
      <Container getQuote={getQuote} />
    </section>
  );
}

const mainElement = document.getElementById("main");
ReactDOM.render(<App />, mainElement);
