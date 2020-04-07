import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="git-profile">
        <img src="https://placehold.it/75" alt="profile img" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}
export default Card;
