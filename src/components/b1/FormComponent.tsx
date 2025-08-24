import React, { Component } from 'react'
interface StateTypes {
  email: string;
}
export default class FormComponent extends Component<object, StateTypes> {
  constructor(props: object){
    super(props);
    this.state = {
      email: ""
    }
  }
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({email: this.state.email});
      
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Form</h2>
          <label>Email</label>
          <br />
          <input onChange={(e) => {
            this.setState({
              email: e.target.value
            })
          }} type="text" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
