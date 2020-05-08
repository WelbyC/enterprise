import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  /*
  styles = {
    fontSize: "30px",
    fontWeight: "bold",
  };
*/
  /*
  renderTags() {
    if (this.state.tags.length ===0) return <p>There are no tags!</p>

    return <ul>{this.state.tags.map(tag => (<li key={tag}>{tag}</li>))}</ul>   
  }
*/

  //    constructor() {
  //     super();
  //      this.handleIncrement = this.handleIncrement.bind(this);
  //    }

  handleIncrement = product => {
    console.log(product);
    // console.log("Increment Clicked", this);

    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>{this.props.children}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
