import { cloneDeep } from 'lodash'

const CREATE_BLOG = 'blog/CREATE'

const initialState = {
  data: [],
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_BLOG: {
      return {
        data: cloneDeep(state.data).concat({
          ...action.payload,
          id: `blg${state.data.length+1000}`,
        })
      }
    }
    default: {
      return state
    }
  }
}

/**
 * @param {Object} payload
 * @param {String} payload.title
 * @param {String} payload.content
 */
const createBlog = (payload) => ({
  type: CREATE_BLOG,
  payload,
})

export {
  createBlog,
}
export default blogReducer
