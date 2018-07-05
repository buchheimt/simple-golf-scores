import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { 
  holesContainer, 
  labelCol, 
  holeCol, 
  holeCell, 
  parCell, 
  yardageCell, 
  highlightedHoleCol, 
  nameInput, 
  summaryCell, 
  summaryYardage, 
  noteCell, 
  generateScoreCellStyles 
} from './styles';

/**
 * @param {Array} holes array of hole objects to generate columns
 * @param {Function} onNoteClick called on click of the note cell
 * @param {Function} handleScoreChange called when an individual score is changed
 * @param {Object} players object for setting player name values
 */
class Scorecard extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedHole: 1
    }
  }

  renderPlayer = (player, hole) => (
    <input
      type='text'
      className={generateScoreCellStyles(hole, player)} 
      value={hole[player] ? hole[player].toString() : ""}
      onChange={e => {
        (e.target.value.match(/^[1-9]$/) || !e.target.value.length) && 
        this.props.handleScoreChange({ holeIdx: hole.num - 1, player, score: Number(e.target.value) })
      }}
    />
  )

  renderLabels = () => (
    <div className={labelCol}>
      <div className={holeCell}>Hole</div>
      <p className={yardageCell}>Yardage</p>
      <p className={parCell}>Par</p>
      {<input className={nameInput} placeholder='Player 1' value={this.props.players.player1} onChange={(e) => this.props.changePlayer('player1', e.target.value
      )} />}
      <input className={nameInput} placeholder='Player 2' value={this.props.players.player2} onChange={(e) => this.props.changePlayer('player2', e.target.value
      )} />
      <p className={parCell}>Rank</p>
      <input className={nameInput} placeholder='Player 3' value={this.props.players.player3} onChange={(e) => this.props.changePlayer('player3', e.target.value
      )} />
      <input className={nameInput} placeholder='Player 4' value={this.props.players.player4} onChange={(e) => this.props.changePlayer('player4', e.target.value
      )} />
      <p className={parCell}>Par</p>
      <p className={yardageCell}>Notes</p>
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
        key={hole.num}
        className={this.state.selectedHole === hole.num ? highlightedHoleCol : holeCol}
        onClick={() => this.setState({
          selectedHole: hole.num
        })
      }>
        <div className={holeCell}>{hole.num}</div>
        <p className={yardageCell}>{hole.yardage}</p>
        <p className={parCell}>{hole.par}</p>
        {this.renderPlayer('player1', hole)}
        {this.renderPlayer('player2', hole)}
        <p className={parCell}>{hole.rank}</p>
        {this.renderPlayer('player3', hole)}
        {this.renderPlayer('player4', hole)}
        <p className={parCell}>{hole.par}</p>
        <p className={noteCell} onClick={() => this.props.onNoteClick(hole.num)}>{!!hole.note && '...'}</p>
      </div>
    )
  );
  
  renderSummary = holes => (
    <div className={holeCol}>
      <p className={holeCell}>OUT</p>
      <p className={summaryYardage}>{holes.reduce((sum, hole) => sum + hole.yardage, 0)}</p>
      <p className={parCell}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player1 ? sum + Number(hole.player1) : sum, 0)}
      </p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player2 ? sum + Number(hole.player2) : sum, 0)}
      </p>
      <p className={parCell}>{"-"}</p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player3 ? sum + Number(hole.player3) : sum, 0)}
      </p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player4 ? sum + Number(hole.player4) : sum, 0)}
      </p>
      <p className={parCell}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>-</p>
    </div>
  );

  renderTotals = holes => (
    <div className={holeCol}>
      <div className={holeCell}>TOT</div>
      <p className={summaryYardage}>{holes.reduce((sum, hole) => sum + hole.yardage, 0)}</p>
      <p className={parCell}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player1 ? sum + Number(hole.player1) : sum, 0)}
      </p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player2 ? sum + Number(hole.player2) : sum, 0)}
      </p>
      <p className={parCell}>{"-"}</p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player3 ? sum + Number(hole.player3) : sum, 0)}
      </p>
      <p className={summaryCell}>
        {holes.reduce((sum, hole) => hole.player4 ? sum + Number(hole.player4) : sum, 0)}
      </p>
      <p className={parCell}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>-</p>
    </div>
  )

  render() {
    return (
      <Fragment>
        <div className={holesContainer} >
          {this.renderLabels()}
          {this.renderNine(this.props.holes.slice(0, 9))}
          {this.renderNine(this.props.holes.slice(9))}
          {this.renderTotals(this.props.holes)}
        </div>
      </Fragment>
    )
  }
}

Scorecard.propTypes = {
  holes: PropTypes.arrayOf(PropTypes.shape({
    num: PropTypes.number.isRequired, 
    yardage: PropTypes.number.isRequired, 
    par: PropTypes.number.isRequired, 
    rank: PropTypes.number.isRequired, 
    player1: PropTypes.number, 
    player2: PropTypes.number, 
    player3: PropTypes.number, 
    player4: PropTypes.number
  })),
  onNoteClick: PropTypes.func.isRequired,
  handleScoreChange: PropTypes.func.isRequired
}

Scorecard.defaultProps = {
  holes: []
}

export default Scorecard;