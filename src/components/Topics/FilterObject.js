import React, { Component } from "react";

class FilterObjects extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        {
          name: "Mustang",
          make: "Ford",
          year: 2013
        },
        {
          name: "Camero",
          year: 2017,
          color: "black"
        },
        {
          name: "Challenger",
          year: "2017",
          color: "blue"
        }
      ],

      userInput: "",
      filteredCars: []
    };
  }

  filterObj(prop) {
    let cars = this.state.cars;
    let filteredCars = [];

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].hasOwnProperty(prop)) {
        filteredCars.push(cars[i]);
      }
    }
    this.setState({ filteredCars: filteredCars });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.cars, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterObj(this.state.userInput);
          }}
        >
          {" "}
          Filter
        </button>

        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredCars, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObjects;
