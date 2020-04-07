import React from 'react';

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    let resp = await fetch(`https://api.github.com/users/${this.state.userName}`);
    const data = await resp.json();
    this.props.onSubmit(data);
    this.setState({ userName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github username"
          required
        ></input>
        <button>Add card</button>
      </form>
    );
  }
}
export default Form;
