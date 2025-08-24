import React, { Component } from 'react'
interface StateTypes {
    progress: string;
    result: string;
}
export default class Range extends Component<object, StateTypes> {
    constructor(props: object){
        super(props);
        this.state = {
            progress: "0",
            result: "",
        }
    }
  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({progress: e.target.value});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({result: this.state.progress});
    }
    return (
      <div>
        <h1>Tiến độ hoàn thành: {this.state.result}%</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Tiến độ: {" "}
                <input 
                value={this.state.progress} 
                onChange={handleChange}
                type="range" min={0} max={100} />
            </label>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

