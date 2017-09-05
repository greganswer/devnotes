import React, { Component } from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {athletes.map(athlete => <AthletePreview key={athlete.id} {...athlete} />)}
        </div>
      </div>
    );
  }
}
