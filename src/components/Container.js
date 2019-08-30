import React from "react";
import "../styles/container.scss";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.generateQuote = this.generateQuote.bind(this);
  }
  componentDidMount() {
    this.setState(this.props.getQuote());
  }
  generateQuote() {
    this.setState(this.props.getQuote());
  }
  render() {
    return (
      <section id="quote-box" className="wrapper">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        <div className="controls">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            title="tweet"
            targe="_blank"
          >
            t
          </a>
          <input
            id="new-quote"
            type="button"
            value="Generate"
            onClick={this.generateQuote}
          />
        </div>
      </section>
    );
  }
}

export default Container;
