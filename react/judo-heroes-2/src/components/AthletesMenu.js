import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AthletesMenu extends Component {
  renderLink(athlete) {
    return (
      <Link key={athlete.id} to={`/athlete/${athlete.id}`} activeClassName="active">
        {athlete.name}
      </Link>
    );
  }

  render() {
    return (
      <nav className="athletes-menu">
        {this.props.athletes.map(athlete => this.renderLink(athlete))}
      </nav>
    );
  }
}
