import React, { Component } from 'react'
interface StateType {
    count: number;
}
export default class Counter extends Component<object, StateType> {
    private timerId?: NodeJS.Timeout;
    constructor(props: object){
        super(props);
        this.state = {
            count: 0,
        }
    }
    componentDidMount(): void {
        this.timerId = setInterval(() => {
            this.setState((prevState) => ({
                count: (prevState.count + 1) % 11,
            }))
        }, 1000)
    }
    componentWillUnmount(): void {
        if(this.timerId){
            clearInterval(this.timerId);
        }
    }
  render() {
    return (
      <div><h2>Counter: {this.state.count}</h2></div>
    )
  }
}
