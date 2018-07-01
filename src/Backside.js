import React, { Component, Fragment } from 'react';

import { noteModal, infoCol, inputCol, backsideWrapper } from './styles';

class Backside extends Component {

  render() {
    return (
      <div className={backsideWrapper}>
        <div className={infoCol}>
          <p>Hole Num</p>
          <p>Yardage</p>
          <p>Par</p>
          <p>Player 1</p>
          <p>Player 2</p>
          <p>Player 3</p>
          <p>Player 4</p>
        </div>
        <div className={inputCol}>
          <textarea />
        </div>
      </div>
    )
  }
}

export default Backside;