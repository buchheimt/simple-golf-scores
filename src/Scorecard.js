import React, { Component } from 'react';

import { scorecard, scorecardHeader, courseName, scorecardRow, holesContainer, holeColumn, holeRow, parRow, yardageRow, scoreCell } from './styles';

const rowConfig = [
  {value: 1, label: 'Blue'},
  {value: 2, label: 'White'},
  {value: 3, label: 'Red'},
  {value: 4, label: 'Par'},
  {value: 5, label: 'Rank'}
]

const holes = [
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1},
  {yardage: 444, par: 3, rank: 18, num: 1}
]

class Scorecard extends Component {


  render() {
    return (
      <div className={scorecard}>
        <div className={scorecardHeader} >
          <h1 className={courseName}>Green Crest GC</h1>
        </div>
        <div className={holesContainer} >
          <div className={holeColumn}>
            <div className={holeRow}>Hole</div>
            <p className={yardageRow}>Yardage</p>
            <p className={parRow}>Par</p>
            <p className={scoreCell}>Rank</p>
            <p className={scoreCell}>Player 1</p>
            <p className={scoreCell}>Player 2</p>
            <p className={scoreCell}>Player 3</p>
            <p className={scoreCell}>Player 4</p>
          </div>
          {holes.slice(0, 9).map(hole => (
            <div className={holeColumn}>
              <div className={holeRow}>{hole.num}</div>
              <p className={yardageRow}>{hole.yardage}</p>
              <p className={parRow}>{hole.par}</p>
              <p className={scoreCell}>{hole.rank}</p>
              <p className={scoreCell}>3</p>
              <p className={scoreCell}>3</p>
              <p className={scoreCell}>3</p>
              <p className={scoreCell}>3</p>
            </div>
          ))}
          <div className={holeColumn}>
            <p className={holeRow}>Totals</p>
            <p className={yardageRow}>{holes.slice(0, 9).reduce((sum, hole) => sum + hole.yardage, 0)}</p>
            <p className={parRow}>{holes.slice(0, 9).reduce((sum, hole) => sum + hole.par, 0)}</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
          </div>
          {holes.slice(9).map(hole => (
            <div className={holeColumn}>
              <div className={holeRow}>{hole.num}</div>
              <p className={yardageRow}>{hole.yardage}</p>
              <p className={parRow}>{hole.par}</p>
              <p className={scoreCell}>{hole.rank}</p>
              <p className={scoreCell}>3</p>
              <p className={scoreCell}>3</p>
              <p className={scoreCell}>3</p>
              <p className={scoreCell}>3</p>
            </div>
          ))}
          <div className={holeColumn}>
            <div className={holeRow}>Totals</div>
            <p className={yardageRow}>{holes.slice(9).reduce((sum, hole) => sum + hole.yardage, 0)}</p>
            <p className={parRow}>{holes.slice(9).reduce((sum, hole) => sum + hole.par, 0)}</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
          </div>
          <div className={holeColumn}>
            <div className={holeRow}>Round</div>
            <p className={yardageRow}>{holes.reduce((sum, hole) => sum + hole.yardage, 0)}</p>
            <p className={parRow}>{holes.reduce((sum, hole) => sum + hole.par, 0)}</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
            <p className={scoreCell}>3</p>
          </div>
        </div>
       
      </div>
    )
  }
}

export default Scorecard;