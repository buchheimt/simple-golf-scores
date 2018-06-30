import React, { Component } from 'react';

import { scorecard, scorecardHeader, courseName } from './styles';

class Scorecard extends Component {


  render() {
    return (
      <div className={scorecard}>
        <div className={scorecardHeader} >
          <h1 className={courseName}>Green Crest GC</h1>
        </div>
      </div>
    )
  }
}

export default Scorecard;