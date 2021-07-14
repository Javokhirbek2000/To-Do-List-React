import React from "react";

class Input extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { name: ""};
  }

    handleChange = (event) => {
      this.setState({name: event.target.value});
    }

    handleSubmit = (event) =>{
      event.preventDefault();
      this.props.onAdd(this.state.name);
      this.setState({name: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} type="text" name="todo" value={this.state.name}/>
              <button type="submit">+</button>
            </form>
        );
    }
}

export default Input;