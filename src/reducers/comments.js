// action types
const INIT_COMMNETS = 'INIT_COMMNETS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
// import {INIT_COMMNETS,ADD_COMMENT,DELETE_COMMENT} from '../action/actions'

// reducer
export default function (state, action) {
  if (!state) {
    state = { comments: [] }
  }
  switch (action.type) {
    case INIT_COMMNETS:
      // 初始化评论
      return { comments: action.comments }
    case ADD_COMMENT:
      // 新增评论
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      // 删除评论
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = comments => ({
  type: INIT_COMMNETS,
  comments
})

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

export const deleteComment = commentIndex => ({
  type: DELETE_COMMENT,
  commentIndex
})