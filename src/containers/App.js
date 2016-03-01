import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost, removePost } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(addPost('yucong'))
    this.props.dispatch(addPost('zhouxing'))
    this.props.dispatch(addPost('leiguang'))
    this.props.dispatch(addPost('yufanchao'))
  }

  removePost(id) {
    this.props.dispatch(removePost(id))
  }

  addPost() {
    this.props.dispatch(addPost(this.refs.input.value))
  }

  render() {
    return (
      <div>
        <h1>Onionkings</h1>
        <div>
          <input ref="input" />
          <button onClick={this.addPost.bind(this)}>Add</button>
        </div>
        <ul>
        {
          this.props.posts.map(item =>
            <li key={item.id} onClick={this.removePost.bind(this, item.id)}>{item.words}</li>
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
