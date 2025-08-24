import React, { Component } from 'react'
interface StateType {
    time: Date;
}
export default class Clock extends Component<object, StateType> {
    constructor(props: object){
        super(props);
        this.state = {
            time: new Date(),
        }
    }
  render() {
    const {time} = this.state;
    return (
      <div>
        <h2>Thời gian hiện tại: {" "}
        {time.getHours().toString().padStart(2, "0")}: {" "}
        {time.getMinutes().toString().padStart(2, "0")} :{" "}
         {time.getSeconds().toString().padStart(2, "0")}
        </h2>
      </div>
    )
  }
}
