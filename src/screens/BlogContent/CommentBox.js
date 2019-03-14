import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  Button,
  TextInput,
} from '@components'

class CommentBox extends PureComponent {
  userNameInput = undefined
  commentInput = undefined

  state = {
    userName: '',
    comment: '',
  }

  updateUserName = (text) => {
    this.setState({ userName: text })
  }

  updateComment = (text) => {
    this.setState({ comment: text })
  }

  focusCommentInput = () => {
    if (this.commentInput?.focus) {
      this.commentInput.focus()
    }
  }

  onSend = () => {
    this.props.onSend(this.state)
    if (this.userNameInput?.clear) {
      this.userNameInput.clear()
    }

    if (this.commentInput?.clear) {
      this.commentInput.clear()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={(ref) => { this.userNameInput = ref }}
          placeholder="Name"
          value={this.state.userName}
          onChangeText={this.updateUserName}
          onSubmitEditing={this.focusCommentInput}
        />
        <TextInput
          ref={(ref) => { this.commentInput = ref }}
          placeholder="How you think about this?"
          value={this.state.comment}
          onChangeText={this.updateComment}
          style={styles.commentInput}
          multiline
        />
        <Button
          style={styles.sendButton}
          title="Send"
          onPress={this.onSend}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  commentInput: {
    height: 80,
    marginTop: 8,
  },
  sendButton: {
    marginTop: 8,
    alignSelf: 'flex-end',
  },
})

CommentBox.propTypes = {
  onSend: PropTypes.func.isRequired,
}

export default CommentBox
