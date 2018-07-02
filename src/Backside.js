import React, { Component, Fragment } from 'react';

import { noteModal, infoCol, inputCol, backsideWrapper, notes, notesLabel } from './styles';

class Backside extends Component {

  render() {
    const { num, yardage, par, rank } = this.props.hole;

    return (
      <div className={backsideWrapper}>
        <div className={infoCol}>
          {console.log(this.props.hole)}
          <p>Hole {num}</p>
          <p>Yardage: {yardage}</p>
          <p>Par: {par}</p>
          <p>Player 1</p>
          <p>Player 2</p>
          <p>Player 3</p>
          <p>Player 4</p>
        </div>
        <div className={inputCol}>
          <p className={notesLabel}>Notes</p>
          <textarea className={notes} />
        </div>
      </div>
    )
  }
}

export default Backside;