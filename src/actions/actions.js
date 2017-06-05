// action types
const INIT_COMMNETS = 'INIT_COMMNETS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'


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
