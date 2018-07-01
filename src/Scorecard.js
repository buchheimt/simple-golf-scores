import React, { Component, Fragment } from 'react';

import { scorecard, scorecardHeader, courseName, scorecardRow, holesContainer, holeColumn, holeRow, parRow, yardageRow, scoreCell, highlightedHoleCol, nameInput, summaryCell, summaryYardage } from './styles';

const rowConfig = [
  {value: 1, label: 'Blue'},
  {value: 2, label: 'White'},
  {value: 3, label: 'Red'},
  {value: 4, label: 'Par'},
  {value: 5, label: 'Rank'}
]

const holes = [
  {yardage: 307, par: 4, rank: 18, num: 1},
  {yardage: 515, par: 5, rank: 14, num: 2},
  {yardage: 459, par: 4, rank: 2, num: 3},
  {yardage: 428, par: 4, rank: 3, num: 4},
  {yardage: 165, par: 3, rank: 15, num: 5},
  {yardage: 362, par: 4, rank: 5, num: 6},
  {yardage: 160, par: 3, rank: 7, num: 7},
  {yardage: 371, par: 4, rank: 9, num: 8},
  {yardage: 380, par: 4, rank: 6, num: 9},
  {yardage: 328, par: 4, rank: 17, num: 10},
  {yardage: 477, par: 4, rank: 1, num: 11},
  {yardage: 185, par: 3, rank: 8, num: 12},
  {yardage: 553, par: 5, rank: 10, num: 13},
  {yardage: 410, par: 4, rank: 12, num: 14},
  {yardage: 406, par: 4, rank: 4, num: 15},
  {yardage: 317, par: 4, rank: 13, num: 16},
  {yardage: 165, par: 3, rank: 16, num: 17},
  {yardage: 342, par: 4, rank: 11, num: 18}
]

class Scorecard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHole: 1,
      player1: '',
      player2: '',
      player3: '',
      player4: ''
    }
  }

  renderLabels = () => (
    <div className={holeColumn}>
      <div className={holeRow}>Hole</div>
      <p className={yardageRow}>Yardage</p>
      <p className={parRow}>Par</p>
      <input className={nameInput} placeholder='Player 1' value={this.state.player1} onChange={(e) => this.setState({
        player1: e.target.value
      })} />
      <input className={nameInput} placeholder='Player 2' value={this.state.player2} onChange={(e) => this.setState({
        player2: e.target.value
      })} />
      <p className={parRow}>Rank</p>
      <input className={nameInput} placeholder='Player 3' value={this.state.player3} onChange={(e) => this.setState({
        player3: e.target.value
      })} />
      <input className={nameInput} placeholder='Player 4' value={this.state.player4} onChange={(e) => this.setState({
        player4: e.target.value
      })} />
      <p className={parRow}>Par</p>
      <p className={scoreCell}>Notes</p>
    </div>
  );

  renderNine = holes => (
    <Fragment>
      {this.renderHoles(holes)}
      {this.renderSummary(holes)}
    </Fragment>
  );

  renderHoles = holes => 
    holes.map(hole => (
      <div 
        className={this.state.selectedHole === hole.num ? highlightedHoleCol : holeColumn}
        onClick={() => this.setState({
          selectedHole: hole.num
        })
      }>
        <div className={holeRow}>{hole.num}</div>
        <p className={yardageRow}>{hole.yardage}</p>
        <p className={parRow}>{hole.par}</p>
        <p className={scoreCell}>3</p>
        <p className={scoreCell}>3</p>
        <p className={parRow}>{hole.rank}</p>
        <p className={scoreCell}>3</p>
        <p className={scoreCell}>3</p>
        <p className={parRow}>{hole.par}</p>
        <p className={scoreCell} onClick={() => this.props.onNoteClick(hole.num)}>...</p>
      </div>
    )
  );

  renderSummary = holes => (
    <div className={holeColumn}>
      <p className={holeRow}>OUT</p>
      <p className={summaryYardage}>{holes.reduce((sum, hole) => sum + hole.yardage, 0)}</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>3</p>
      <p className={summaryCell}>3</p>
      <p className={parRow}>{"-"}</p>
      <p className={summaryCell}>3</p>
      <p className={summaryCell}>3</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={scoreCell}></p>
    </div>
  );

  renderTotals = () => (
    <div className={holeColumn}>
      <div className={holeRow}>TOT</div>
      <p className={summaryYardage}>{holes.reduce((sum, hole) => sum + hole.yardage, 0)}</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>3</p>
      <p className={summaryCell}>3</p>
      <p className={parRow}>{"-"}</p>
      <p className={summaryCell}>3</p>
      <p className={summaryCell}>3</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={scoreCell}></p>
    </div>
  )

  render() {
    return (
      <div className={scorecard}>
        <div className={scorecardHeader} >
          <h1 className={courseName}>Green Crest GC</h1>
        </div>
        {console.log(this.state)}
        <div className={holesContainer} >
          {this.renderLabels()}
          {this.renderNine(holes.slice(0, 9))}
          {this.renderNine(holes.slice(9))}
          {this.renderTotals()}
        </div>
      </div>
    )
  }
}

export default Scorecard;