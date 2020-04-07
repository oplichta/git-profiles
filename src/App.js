import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

// GitHub usernames: tj, gaearon, sophiebits, sebmarkbage, bvaughn

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="header">
        <h2>{this.props.title}</h2>
        <h3> GitHub usernames to try: tj, gaearon, sophiebits, sebmarkbage, bvaughn</h3>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
