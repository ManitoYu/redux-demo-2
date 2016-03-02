import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost, removePost, setPostEditing, updateWords, getPosts, savePost, setPostCompleted } from '../actions'
import ReactDOM from 'react-dom'
import './App.scss'
import EditableText from '../components/EditableText'

let style = {
  delete: {
    cursor: 'pointer'
  },
  flex: {
    display: 'flex'
  }
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    const { posts, dispatch } = this.props

    return (
      <div>
        <h1>Onionkings</h1>
        <div>
          <input ref="input" />
          <button onClick={() => { dispatch(addPost(this.refs.input.value)), this.refs.input.value = '' }}>Add</button>
        </div>
        <ul>
        {
          posts.map(item =>
            <li key={item.id} style={Object.assign({}, style.flex, { textDecoration: item.completed ? 'line-through' : 'none' })}>
              <EditableText
                editing={item.editing}
                words={item.words}
                onEditWords={words => dispatch(setPostEditing(item.id, true))}
                onUpdateWords={words => dispatch(updateWords(item.id, words))}
                onSaveWords={words => dispatch(savePost(item.id, words))} />
              <a style={style.delete} onClick={() => dispatch(removePost(item.id))}>&times;</a>
              <a onClick={() => dispatch(setPostCompleted(item.id, item.completed ? false : true))}>&radic;</a>
            </li>
          )
        }
        </ul>
      </div>
    )
  }

}

let mapStateToProps = (state) => {
  const { posts } = state

  return {
    posts: posts
  }
}

export default connect(mapStateToProps)(App)
