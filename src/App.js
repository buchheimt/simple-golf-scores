import React, { Component } from 'react';
import { Parser as Json2csvParser } from 'json2csv';
import FileSaver from 'file-saver';
import Csv from 'csvtojson';

import Scorecard from './Scorecard';
import Backside from './Backside';
import defaultCourse from './defaultCourse'
import backIcon from './assets/images/back.png';
import downloadIcon from './assets/images/download.png';
import uploadIcon from './assets/images/upload.png';

import { overlay, scorecard, scorecardHeader, courseName, backIconStyles, downloadIconStyles, uploadHidden, uploadIconStyles } from './styles';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backsideNum: null,
      holes: defaultCourse.holes,
      courseName: defaultCourse.courseName,
      players: {
        player1: '',
        player2: '',
        player3: '',
        player4: ''
      }
    }
  }

  setNoteModal = backsideNum => this.setState({ backsideNum });

  updateHoleForPlayer = ({holeIdx, player, score}) =>
    this.setState((prev) => ({
      holes: [
        ...prev.holes.slice(0, holeIdx),
        {...prev.holes[holeIdx], [player]: score},
        ...prev.holes.slice(holeIdx + 1)
      ]
    }));

  updateNoteForHole = ({holeIdx, note}) =>
    this.setState((prev) => ({
      holes: [
        ...prev.holes.slice(0, holeIdx),
        {...prev.holes[holeIdx], note},
        ...prev.holes.slice(holeIdx + 1)
      ]
    }));

  changePlayer = (playerKey, value) =>
    this.setState((prev) => ({
      players: {
        ...prev.players,
        [playerKey]: value
      }
    }));

  download = () => {
    const { player1, player2, player3, player4 } = this.state.players;
    const fields = [
      'num', 
      'yardage', 
      'par', 
      'rank', 
      player1 || 'player1', 
      player2 || 'player2', 
      player3 || 'player3', 
      player4 || 'player4', 
      'note'
    ];
    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(this.state.holes);
    const blob = new Blob([csv], {type: 'text/plain'})
    FileSaver.saveAs(blob, `${this.state.courseName.split(" ").join("_").toLowerCase()}.csv`);
  }

  upload = e => {
    const file = e.target.files[0];
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
          courseName: file.name.split(".csv")[0].split(/[-_]/).join(" "),
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
            {!!this.state.backsideNum && <img src={backIcon} onClick={() => this.setNoteModal(null)} className={backIconStyles} alt='Back Icon' />}
            <h1 className={courseName}>{this.state.courseName}</h1>
            <img src={downloadIcon} className={downloadIconStyles} onClick={this.download} title="Download to CSV" alt='Download Icon' />
            <input type='file' id='file' className={uploadHidden} onChange={this.upload} />
            <label className={uploadIconStyles} htmlFor='file'>
              <img src={uploadIcon} title="Upload CSV" alt='Upload Icon' />
            </label>
          </div>
          {this.state.backsideNum 
            ? (
              <Backside
                hole={this.state.holes.find(hole => hole.num === this.state.backsideNum)}
                changeNote={this.updateNoteForHole}
                players={this.state.players}
              />
            ) : (
              <Scorecard
                holes={this.state.holes}
                onNoteClick={this.setNoteModal}
                handleScoreChange={this.updateHoleForPlayer}
                players={this.state.players}
                changePlayer={this.changePlayer}
              />
            )}
        </div>
      </div>
    );
  }
}

export default App;
