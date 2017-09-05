import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AthletePreview extends Component {
  render() {
    return (
      <Link to={`athlete/${this.props.id}`}>
        <div>
          <img src={`img/${this.props.image}`} />
          <h2 className="name">
            {this.props.name}
          </h2>
          <span className="medals-count">
            <img src="/img/medal.png" /> {this.props.medals.length}
          </span>
        </div>
      </Link>
    );
  }
}
