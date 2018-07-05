import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { holesContainer, holeColumn, holeRow, parRow, yardageRow, highlightedHoleCol, nameInput, summaryCell, summaryYardage, noteCell, generateScoreCellStyles } from './styles';

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
      onChange={e => (e.target.value.match(/^[1-9]$/) || !e.target.value.length) && this.props.handleScoreChange({holeIdx: hole.num - 1, player, score: Number(e.target.value)})}
    />
  )

  renderLabels = () => (
    <div className={holeColumn}>
      <div className={holeRow}>Hole</div>
      <p className={yardageRow}>Yardage</p>
      <p className={parRow}>Par</p>
      {<input className={nameInput} placeholder='Player 1' value={this.props.players.player1} onChange={(e) => this.props.changePlayer('player1', e.target.value
      )} />}
      <input className={nameInput} placeholder='Player 2' value={this.props.players.player2} onChange={(e) => this.props.changePlayer('player2', e.target.value
      )} />
      <p className={parRow}>Rank</p>
      <input className={nameInput} placeholder='Player 3' value={this.props.players.player3} onChange={(e) => this.props.changePlayer('player3', e.target.value
      )} />
      <input className={nameInput} placeholder='Player 4' value={this.props.players.player4} onChange={(e) => this.props.changePlayer('player4', e.target.value
      )} />
      <p className={parRow}>Par</p>
      <p className={yardageRow}>Notes</p>
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
        className={this.state.selectedHole === hole.num ? highlightedHoleCol : holeColumn}
        onClick={() => this.setState({
          selectedHole: hole.num
        })
      }>
        <div className={holeRow}>{hole.num}</div>
        <p className={yardageRow}>{hole.yardage}</p>
        <p className={parRow}>{hole.par}</p>
        {this.renderPlayer('player1', hole)}
        {this.renderPlayer('player2', hole)}
        <p className={parRow}>{hole.rank}</p>
        {this.renderPlayer('player3', hole)}
        {this.renderPlayer('player4', hole)}
        <p className={parRow}>{hole.par}</p>
        <p className={noteCell} onClick={() => this.props.onNoteClick(hole.num)}>{!!hole.note && '...'}</p>
      </div>
    )
  );
  
  renderSummary = holes => (
    <div className={holeColumn}>
      <p className={holeRow}>OUT</p>
      <p className={summaryYardage}>{holes.reduce((sum, hole) => sum + hole.yardage, 0)}</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player1 ? sum + Number(hole.player1) : sum, 0)}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player2 ? sum + Number(hole.player2) : sum, 0)}</p>
      <p className={parRow}>{"-"}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player3 ? sum + Number(hole.player3) : sum, 0)}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player4 ? sum + Number(hole.player4) : sum, 0)}</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>-</p>
    </div>
  );

  renderTotals = holes => (
    <div className={holeColumn}>
      <div className={holeRow}>TOT</div>
      <p className={summaryYardage}>{holes.reduce((sum, hole) => sum + hole.yardage, 0)}</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player1 ? sum + Number(hole.player1) : sum, 0)}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player2 ? sum + Number(hole.player2) : sum, 0)}</p>
      <p className={parRow}>{"-"}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player3 ? sum + Number(hole.player3) : sum, 0)}</p>
      <p className={summaryCell}>{holes.reduce((sum, hole) => hole.player4 ? sum + Number(hole.player4) : sum, 0)}</p>
      <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
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