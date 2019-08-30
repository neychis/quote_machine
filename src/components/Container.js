import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.generateQuote = this.generateQuote.bind(this);
  }
  generateQuote() {
    this.setState({
      quote: "aaa"
    });
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="text">{this.state.author}</div>
        <div />
        <input type="button" value="Generate" onClick={this.generateQuote} />
      </div>
    );
  }
}

export default Container;
