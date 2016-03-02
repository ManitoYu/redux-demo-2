import React, { Component, PropTypes } from 'react'

export default class EditableText extends Component {
  render() {
    const { words, editing, onUpdateWords, onSaveWords, onEditWords } = this.props

    return (
      <div>
      {
        editing
          ? <input value={words} onChange={ev => onUpdateWords(ev.target.value)} onBlur={ev => onSaveWords(ev.target.value)} />
          : <span onDoubleClick={ev => onEditWords(ev.target.value)}>{words}</span>
      }
      </div>
    )

  }

}


EditableText.defaultProps = {
  editing: false
}

EditableText.propTypes = {
  words: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onUpdateWords: PropTypes.func.isRequired,
  onSaveWords: PropTypes.func.isRequired,
  onEditWords: PropTypes.func.isRequired
}
