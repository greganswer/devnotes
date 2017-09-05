import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import AthletesMenu from './AthletesMenu';
import Medal from './Medal';
import Flag from './Flag';

import athletes from '../data/athletes';

export default class AthletePage extends Component {
  constructor(props) {
    super(props);
    const id = this.props.params.id;
    this.props.athlete = athletes.filter(athlete => athlete.id === id)[0];
  }

  renderDescription() {
    return (
      <section className="description">
        Olympic medalist from{' '}
        <strong>
          <Flag code={this.props.athlete.country} showName="true" />
        </strong>, born in {this.props.athlete.birth} (Find out more on{' '}
        <a href={this.props.athlete.link} target="_blank">
          Wikipedia
        </a>).
      </section>
    );
  }

  renderMedals() {
    return (
      <section className="medals">
        <p>
          Winner of <strong>{this.props.athlete.medals.length}</strong> medals:
        </p>
        <ul>
          {this.props.athlete.medals.map((medal, i) => <Medal key={i} {...medal} />)}
        </ul>
      </section>
    );
  }

  renderPicture() {
    return (
      <div className="picture-container">
        <img src={`/img/${this.props.athlete.image}`} />
        <h2 className="name">
          {this.props.athlete.name}
        </h2>
      </div>
    );
  }

  render() {
    if (!this.props.athlete) {
      return <NotFoundPage />;
    }

    const headerStyle = { backgroundImage: `url(/img/${this.props.athlete.cover})` };

    return (
      <div className="athlete-full">
        <AthletesMenu athletes={athletes} />
        <div className="athlete">
          <header style={headerStyle} />
        </div>
        {this.renderPicture()}
        {this.renderDescription()}
        {this.renderMedals()}
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
