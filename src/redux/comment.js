import { cloneDeep } from 'lodash'

const CREATE_COMMENT = 'comment/CREATE'

const initialState = {
  data: {},
}

const commentReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_COMMENT: {
      const { blogID, comment } = action.payload
      const data = cloneDeep(state.data)
      const blogComment = data[blogID] || []
      data[blogID] = blogComment.concat({
        ...comment,
        id: `cmt${blogComment.length + 100}${blogID}`,
      })

      return { data }
    }
    default: {
      return state
    }
  }
}

/**
 * @param {Object} payload
 * @param {String} payload.blogID
 * @param {String} payload.comment
 * @param {String} payload.comment.userName
 * @param {String} payload.comment.comment
 */
const createComment = (payload) => ({
  type: CREATE_COMMENT,
  payload,
})

export {
  createComment,
}
export default commentReducer
