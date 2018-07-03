import React, { Component } from 'react';
import { Parser as Json2csvParser } from 'json2csv';
import FileSaver from 'file-saver';

import Scorecard from './Scorecard';
import Backside from './Backside';
import defaultHoles from './defaultCourse'

import { overlay, scorecard, scorecardHeader, courseName, download } from './styles';

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

  updateNoteForHole = ({holeIdx, note}) => {
    this.setState({
      ...this.state,
      holes: [
        ...this.state.holes.slice(0, holeIdx),
        {...this.state.holes[holeIdx], note},
        ...this.state.holes.slice(holeIdx + 1)
      ]
    })
  }

  download = () => {
    const fields = [
      'num', 'yardage', 'par', 'rank', 'player1', 'player2', 'player3', 'player4', 'note'
    ];
    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(this.state.holes);
    const blob = new Blob([csv], {type: 'text/plain'})
    FileSaver.saveAs(blob, 'golf-scorez.csv');
  }

  render() {
    return (
      <div className={overlay}>
      {console.log(this.state)}       
        <div className={scorecard}>
          <div className={scorecardHeader} >
            <h1 className={courseName}>Green Crest GC</h1>
            <span className={download} onClick={this.download}>download</span>
          </div>
          {this.state.backsideNum ? <Backside hole={this.state.holes.find(hole => hole.num === this.state.backsideNum)} onBack={() => this.setNoteModal(null)} changeNote={this.updateNoteForHole} /> : <Scorecard holes={this.state.holes} onNoteClick={this.setNoteModal} handleScoreChange={this.updateHoleForPlayer} />}
        </div>
      </div>
    );
  }
}

export default App;
