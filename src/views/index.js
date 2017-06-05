import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from '../containers/CommentApp'
import CommentReducer from '../reducers/comments'

const store = createStore(CommentReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class Index extends Component{
  render(){
    return (
      <div>
        <h1>首页</h1>
        <Provider store={store}>
          <CommentApp />
        </Provider>
      </div>
    )
  }
}
