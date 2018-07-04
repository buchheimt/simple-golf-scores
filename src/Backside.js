import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { noteModal, infoCol, inputCol, backsideWrapper, notes, notesLabel, backButton } from './styles';

class Backside extends Component {

  render() {
    const { num, yardage, par, rank, player1, player2, player3, player4, note } = this.props.hole;

    return (
      <div className={backsideWrapper}>
        <div className={infoCol}>
          <p>Hole {num}</p>
          <p>Yardage: {yardage}</p>
          <p>Par: {par}</p>
          <p>Player 1{!!player1 && `: ${player1}`}</p>
          <p>Player 2{!!player2 && `: ${player2}`}</p>
          <p>Player 3{!!player3 && `: ${player3}`}</p>
          <p>Player 4{!!player4 && `: ${player4}`}</p>
        </div>
        <div className={inputCol}>
          <p className={notesLabel}>Notes</p>
          <textarea className={notes} value={note} onChange={e => this.props.changeNote({holeIdx: num - 1, note: e.target.value})} />
        </div>
        
      </div>
    )
  }
}

Backside.propTypes = {
  hole: PropTypes.shape({
    num: PropTypes.number.isRequired, 
    yardage: PropTypes.number.isRequired, 
    par: PropTypes.number.isRequired, 
    rank: PropTypes.number.isRequired, 
    player1: PropTypes.number, 
    player2: PropTypes.number, 
    player3: PropTypes.number, 
    player4: PropTypes.number, 
    note: PropTypes.string.isRequired
  })
}

export default Backside;