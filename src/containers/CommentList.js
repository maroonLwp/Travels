import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from '../components/CommentList'
import { initComments, deleteComment } from '../reducers/comments'

class CommentListContainer extends Component{
  constructor(){
    super()
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }

  componentWillMount() {
    this._loadComments()
  }

  _loadComments(){
    let comments = localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
        // this.props.initComments 是 connect 传进来的
        // 可以帮我们把数据初始化到 state 里面去
    this.props.initComments(comments)
  }

  handleDeleteComment(Index){
    const { comments } = this.props
        // props 是不能变的，所以这里新建一个删除了特定下标的评论列表
    const newComments = [
      ...comments.slice(0, Index),
      ...comments.slice(Index + 1)
    ]
        // 保存最新的评论列表到 LocalStorage
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.onDeleteComment){
            // this.props.onDeleteComment 是 connect 传进来的
            // 会 dispatch 一个 action 去删除评论
      this.props.onDeleteComment(Index)
    }
  }

  render(){
    return (
      <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment} />
    )
  }

}

CommentListContainer.propTypes = {
  comments: PropTypes.array,
  initComments: PropTypes.func,
  onDeleteComment: PropTypes.func
}

// 评论列表从 state.comments 中获取
const mapStateToProps = state => ({
  comments: state.comments
})

const mapDispatchToProps = dispatch => ({
    // 提供给 CommentListContainer
    // 当从 LocalStorage 加载评论列表以后就会通过这个方法
    // 把评论列表初始化到 state 当中
  initComments: (comments) => {
    dispatch(initComments(comments))
  },
    // 删除评论
  onDeleteComment: (commentIndex) => {
    dispatch(deleteComment(commentIndex))
  }
})

// 将 CommentListContainer connect 到 store
// 会把 comments、initComments、onDeleteComment 传给 CommentListContainer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer)