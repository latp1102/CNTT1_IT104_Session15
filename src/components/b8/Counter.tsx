import React, { Component } from 'react'
interface StateType {
    count: number;
}
export default class Counter extends Component<object, StateType> {
    constructor(props: object){
        super(props);
        this.state = {
            count: 0,
        }
    }
  render() {
    const handleIncrease = () => {
            this.setState(prevState => ({
                count: (prevState.count + 1) % 11
            }));
        }
    return (
      <div><h2>Counter: {this.state.count}</h2></div>
      <button onClick={handleIncrease}>Tăng</button> 
    )
  }
}
