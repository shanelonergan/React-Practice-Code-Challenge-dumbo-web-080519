import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    currentIndex: 0,
    budget: 3000
  }

  fourSushi = () => {
    let index = this.state.currentIndex
    return this.state.sushis.slice(index,index+4)
  }

  moreSushi = () => {
    let newNumber

    if (this.state.currentIndex >= 100) {
      newNumber = 0
      return this.setState({
        currentIndex: newNumber
      })
    } else {
      newNumber = this.state.currentIndex + 4
      return this.setState({
        currentIndex: newNumber
      })
    }
  }

  eatSushi = (sushi) => {
    let newBudget = this.state.budget - sushi.price

    this.setState({
      eaten: [...this.state.eaten, sushi],
      budget: newBudget
    })

  }

  render() {

    return (

      <div className="app">

        <SushiContainer
          sushis={this.fourSushi()}
          eaten={this.state.eaten}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
        />

        <Table
          eaten={this.state.eaten}
          budget={this.state.budget}
        />

      </div>

    );
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }
}

export default App;
