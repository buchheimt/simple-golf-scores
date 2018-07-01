import React, { Component, Fragment } from 'react';

import { noteModal } from './styles';

class NoteModal extends Component {

  render() {
    return (
      <div className={noteModal}>
        Im the note modal! {this.props.num}
      </div>
    )
  }
}

export default NoteModal;