import React, { Component } from 'react'
interface StateTypes {
    color: string;
    result: string;
}
export default class ColorComponent extends Component<object, StateTypes> {
    constructor(props: object){
        super(props);
        this.state = {
            color: "#000000",
            result: "",
        }
    }
  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({color: e.target.value});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({
            result: this.state.color,
            color: "#ff0000"
        })
    }
    return (
      <div>
        <h2>Color: {this.state.color}</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Màu sắc: {" "}
                <input 
                value={this.state.color} 
                onChange={handleChange}
                type="color" />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
