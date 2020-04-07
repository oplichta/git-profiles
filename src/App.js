import React from 'react';
import './App.css';
import CardList from './CardList';

class App extends React.Component {
  render() {
    return (
      <div className="header">
        {this.props.title}
        <CardList />
      </div>
    );
  }
}

export default App;
