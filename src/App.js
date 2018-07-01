import React, { Component } from 'react';

import Scorecard from './Scorecard';
import NoteModal from './NoteModal';

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      noteModalId: null
    }
  }

  setNoteModal = noteModalId => this.setState({ noteModalId })

  render() {
    return (
      <div>
        {this.state.noteModalId && <NoteModal num={this.state.noteModalId} />}
        <Scorecard onNoteClick={this.setNoteModal} />
      </div>
    );
  }
}

export default App;
