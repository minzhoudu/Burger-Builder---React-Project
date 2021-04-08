import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  //default state
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };

  //render
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </>
    );
  }

  //handlers
}

export default BurgerBuilder;
