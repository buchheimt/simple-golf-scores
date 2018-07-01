import React, { Component } from 'react';

import { scorecard, scorecardHeader, courseName, scorecardRow, holesContainer, holeColumn, holeRow, parRow } from './styles';

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
            <p>Yardage</p>
            <p className={parRow}>Par</p>
            <p>Rank</p>
            <p>Player 1</p>
            <p>Player 2</p>
            <p>Player 3</p>
            <p>Player 4</p>
          </div>
          {holes.slice(0, 9).map(hole => (
            <div className={holeColumn}>
              <div className={holeRow}>{hole.num}</div>
              <p>{hole.yardage}</p>
              <p className={parRow}>{hole.par}</p>
              <p>{hole.rank}</p>
              <p> </p>
            </div>
          ))}
          <div className={holeColumn}>
            <p className={holeRow}>Totals</p>
          </div>
          {holes.slice(9).map(hole => (
            <div className={holeColumn}>
              <div className={holeRow}>{hole.num}</div>
              <p>{hole.yardage}</p>
              <p className={parRow}>{hole.par}</p>
              <p>{hole.rank}</p>
              <p> </p>
            </div>
          ))}
          <div className={holeColumn}>
            <div className={holeRow}>Totals</div>
          </div>
          <div className={holeColumn}>
            <div className={holeRow}>Round</div>
          </div>
        </div>
       
      </div>
    )
  }
}

export default Scorecard;