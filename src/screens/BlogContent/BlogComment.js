import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Separator,
} from '@components'
import { createComment } from '@redux/comment'
import CommentBox from './CommentBox'
import commentList from './CommentList'
import CommentList from './CommentList';

class BlogComment extends PureComponent {
  createNewComment = (comment) => {
    this.props.createComment({
      blogID: this.props.id,
      comment,
    })
  }

  render() {
    return (
      <View>
        <Separator />
        <CommentList data={this.props.commentList} />
        <CommentBox onSend={this.createNewComment} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

BlogComment.propTypes = {
  id: PropTypes.string.isRequired,
  commentList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    userName: PropTypes.string,
    comment: PropTypes.string,
  })),
  createComment: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    commentList: state.comment.data[ownProps.id] || [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createComment: (payload) => { dispatch(createComment(payload)) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogComment)
