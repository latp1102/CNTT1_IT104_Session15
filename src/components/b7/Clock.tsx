import React, { Component } from 'react'
interface StateType {
    time: Date;
}
export default class Clock extends Component<object, StateType> {
    private timeId?: NodeJS.Timeout;
    constructor(props: object){
        super(props);
        this.state = {
            time: new Date(),
        }
    }
    componentDidMount(): void {
        this.timeId = setInterval(() => {
            this.setState({time: new Date()});
        });
    }
    componentWillUnmount(): void {
        if(this.timeId){
            clearInterval(this.timeId);
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
