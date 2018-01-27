import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }
  checkPalindrome() {
    //let answer;
    let fowards = this.state.userInput.split("");
    let backwards = fowards.reverse().join("");

    if (this.state.userInput === backwards) {
      this.setState({ palindrome: "true" });
    } else if (this.state.userInput !== backwards) {
      this.setState({ palindrome: "false" });
    }
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          onChange={e =>
            this.setState({
              userInput: e.target.value
            })
          }
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.checkPalindrome(this.state.userInput);
          }}
        >
          {" "}
          Filter
        </button>

        <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
