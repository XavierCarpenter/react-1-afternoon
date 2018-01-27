import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      cars: ["Mustang", "Porsche", "Corvette", "Challenger"],
      userInput: "",
      filteredCars: []
    };
  }
  filterStr(str) {
    let cars = this.state.cars;
    let filteredCars = [];

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].includes(str)) {
        filteredCars.push(cars[i]);
      }
    }
    this.setState({ filteredCars: filteredCars });
  }
  render() {
    return (
      <div className="puzzleBox StringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.cars, null, 10)}
        </span>
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
            this.filterStr(this.state.userInput);
          }}
        >
          {" "}
          Filter
        </button>

        <span className="resultsBox filterStringtRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredCars, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterString;
