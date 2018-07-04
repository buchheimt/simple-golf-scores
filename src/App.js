import React, { Component } from 'react';
import { Parser as Json2csvParser } from 'json2csv';
import FileSaver from 'file-saver';
import Csv from 'csvtojson';

import Scorecard from './Scorecard';
import Backside from './Backside';
import defaultCourse from './defaultCourse'

import { overlay, scorecard, scorecardHeader, courseName, download, upload } from './styles';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backsideNum: null,
      holes: defaultCourse.holes,
      courseName: defaultCourse.courseName
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
    FileSaver.saveAs(blob, `${this.state.courseName.split(" ").join("_").toLowerCase()}.csv`);
  }

  upload = e => {
    const file = e.target.files[0];
    // if (file.name.match(/.csv$/)) return false;
    const fileReader = new FileReader();

    fileReader.readAsText(file);
    fileReader.onload = () => {
      const csv = fileReader.result;
      Csv(
        {
          headers: [
            'num', 'yardage', 'par', 'rank', 'player1', 'player2', 'player3', 'player4', 'note'
          ]
        })
        .fromString(csv)
        .then((csvParsed) => this.setState({
          courseName: console.log(file.name.split(".csv")[0].split(/[-_]/).join(" ")) || file.name.split(".csv")[0].split(/[-_]/).join(" "),
          holes: csvParsed.map(hole => ({
              yardage: Number(hole.yardage), 
              par: Number(hole.par), 
              rank: Number(hole.rank),
              num: Number(hole.num),
              player1: hole.player1 ? Number(hole.player1) : null,
              player2: hole.player2 ? Number(hole.player2) : null,
              player3: hole.player3 ? Number(hole.player3) : null,
              player4: hole.player4 ? Number(hole.player4) : null,
              note: hole.note
            })
          )
        })
      )
    }
  }

  render() {
    return (
      <div className={overlay}> 
      {console.log(this.state)}    
        <div className={scorecard}>
          <div className={scorecardHeader} >
            <h1 className={courseName}>{this.state.courseName}</h1>
            <span className={download} onClick={this.download}>download</span>
            <input type="file" className={upload} onChange={this.upload} />
          </div>
          {this.state.backsideNum ? <Backside hole={this.state.holes.find(hole => hole.num === this.state.backsideNum)} onBack={() => this.setNoteModal(null)} changeNote={this.updateNoteForHole} /> : <Scorecard holes={this.state.holes} onNoteClick={this.setNoteModal} handleScoreChange={this.updateHoleForPlayer} />}
        </div>
      </div>
    );
  }
}

export default App;
