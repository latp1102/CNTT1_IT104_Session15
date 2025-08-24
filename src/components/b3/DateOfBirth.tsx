import React, { Component } from 'react'
interface StateTypes {
    birthday: string;
    result: string;
}
export default class DateOfBirth extends Component<object, StateTypes> {
    constructor(props: object){
        super(props);
        this.state = {
            birthday: "",
            result: "",
        }
    }
  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({birthday: e.target.value});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({result: this.state.birthday});
    }
    return (
      <div>
        <h1>Ngày sinh: {this.state.result}</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Ngày sinh: {" "}
                <input 
                value={this.state.birthday} 
                onChange={handleChange}
                type="date" />
            </label>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

