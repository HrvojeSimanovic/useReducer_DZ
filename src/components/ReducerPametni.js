import React, { Component } from "react";

export default class ReducerPametni extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  dispatch = (action) => {
    switch (action) {
      case "INCREMENT": {
        return this.setState((state) => ({ count: state.count + 1 }));
      }
      case "DECREMENT": {
        return this.setState((state) => ({ count: state.count - 1 }));
      }
    }
  };

  render() {
    return (
      <div>
        <h5>{this.state.count}</h5>
        <button>
          <i class="fas fa-plus" onClick={() => this.dispatch("INCREMENT")}></i>
        </button>
        &nbsp;&nbsp;&nbsp;
        <button>
          <i
            class="fas fa-minus"
            onClick={() => this.dispatch("DECREMENT")}
          ></i>
        </button>
      </div>
    );
  }
}
