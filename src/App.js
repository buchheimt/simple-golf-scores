import React, { Component } from 'react';

import Scorecard from './Scorecard';
import Backside from './Backside';

import { overlay, scorecard, scorecardHeader, courseName } from './styles';

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backsideNum: null
    }
  }

  setNoteModal = backsideNum => this.setState({ backsideNum })

  render() {
    return (
      <div className={overlay}>        
        <div className={scorecard}>
          <div className={scorecardHeader} >
            <h1 className={courseName}>Green Crest GC</h1>
          </div>
          {this.state.backsideNum ? <Backside num={this.state.backsideNum} /> : <Scorecard onNoteClick={this.setNoteModal} />}
        </div>
      </div>
    );
  }
}

export default App;
