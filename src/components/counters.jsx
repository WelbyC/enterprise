import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    search: "",
    counters: [
      { id: 1, name: "Book #1", value: 4 },
      { id: 2, name: "Book #2", value: 0 },
      { id: 3, name: "Book #3", value: 0 },
      { id: 4, name: "Book #4", value: 0 },
    ],
  };
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredCounters = this.state.counters.filter(counter => {
      return counter.name.indexOf(this.state.search) !== -1;
    });
    return (
      <div>
        {filteredCounters.map(counter => (
          <Counter Key={counter.id} value={counter.value} id={counter.id}>
            <h4> Book #{counter.id} </h4>
          </Counter>
        ))}

        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          style={{ marginTop: "20px" }}
        />
      </div>
    );
  }
}

export default Counters;
