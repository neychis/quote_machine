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
        <div id="author">-- {this.state.author}</div>
        <div className="controls">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            title="tweet"
            target="_blank"
          >
            <img
              width="36px"
              height="36px"
              alt=""
              src="https://pbs.twimg.com/profile_images/1111729635610382336/_65QFl7B_200x200.png"
            />
          </a>
          <button
            id="new-quote"
            type="button"
            className="button"
            onClick={this.generateQuote}
          >
            Generate
          </button>
        </div>
      </section>
    );
  }
}

export default Container;
