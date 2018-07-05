import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
  infoCol, 
  inputCol, 
  backsideWrapper, 
  notes, 
  notesLabel, 
  backsideInfoLabel, 
  backsidePlayerContainer 
} from './styles';

/**
 * @param {Array} hole object with selected hole info
 * @param {Object} players object for setting player name values
 * @param {Function} changeNote called when an individual score is changed
 */
class Backside extends Component {

  render() {
    const { num, yardage, par, player1Score, player2Score, player3Score, player4Score, note } = this.props.hole;
    const { player1, player2, player3, player4 } = this.props.players;

    return (
      <div className={backsideWrapper}>
        <div className={infoCol}>
          <div className={backsideInfoLabel}>
            <p>Hole {num}</p>
            <p>Par {par}</p>
          </div>
          <p>{yardage} yards</p>
          <div className={backsidePlayerContainer}>
            <div>
              <span>{player1 || 'Player 1'}:</span>
              <span> {!!player1Score ? player1Score : '-'}</span>
            </div>
            <div>
              <span>{player2 || 'Player 2'}:</span>
              <span> {!!player2Score ? player2Score : '-'}</span>
            </div>
            <div>
              <span>{player3 || 'Player 3'}:</span>
              <span> {!!player3Score ? player3Score : '-'}</span>
            </div>
            <div>
              <span>{player4 || 'Player 4'}:</span>
              <span> {!!player4Score ? player4Score : '-'}</span>
            </div>
          </div>
          
        </div>
        <div className={inputCol}>
          <p className={notesLabel}>Notes</p>
          <textarea 
            className={notes} 
            value={note} 
            onChange={e => this.props.changeNote({holeIdx: num - 1, note: e.target.value})}
          />
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
    notes: PropTypes.string.isRequired
  }),
  players: PropTypes.shape({
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired,
    player3: PropTypes.string.isRequired,
    player4: PropTypes.string.isRequired,
  })
}

export default Backside;