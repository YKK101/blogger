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
import CommentBox from './CommentBox'

class BlogComment extends PureComponent {
  createNewComment = (comment) => {
    console.warn(comment)
  }

  render() {
    return (
      <View>
        <Separator />
        <Separator />
        <CommentBox onSend={this.createNewComment} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

BlogComment.propTypes = {
  id: PropTypes.string.isRequired,
}

export default BlogComment
