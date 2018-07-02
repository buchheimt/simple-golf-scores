import React, { Component } from 'react';

import Scorecard from './Scorecard';
import Backside from './Backside';
import defaultHoles from './defaultCourse'

import { overlay, scorecard, scorecardHeader, courseName } from './styles';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backsideNum: null,
      holes: defaultHoles
    }
  }

  setNoteModal = backsideNum => this.setState({ backsideNum });

  updateHoleForPlayer = ({holeIdx, player, score}) => {
    this.setState({
      ...this.state,
      holes: [
        ...this.state.holes.slice(0, holeIdx),
        {...this.state.holes[holeIdx], [player]: score},
        ...this.state.holes.slice(holeIdx + 1)
      ]
    })
  }

  render() {
    return (
      <div className={overlay}>
      {console.log(this.state)}       
        <div className={scorecard}>
          <div className={scorecardHeader} >
            <h1 className={courseName}>Green Crest GC</h1>
          </div>
          {this.state.backsideNum ? <Backside hole={this.state.holes.find(hole => hole.num === this.state.backsideNum)} /> : <Scorecard holes={this.state.holes} onNoteClick={this.setNoteModal} handleScoreChange={this.updateHoleForPlayer} />}
        </div>
      </div>
    );
  }
}

export default App;
