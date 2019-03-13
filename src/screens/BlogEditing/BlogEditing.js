import React, { PureComponent } from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  Button,
  Text,
  TextInput,
} from '@components'

class BlogEditing extends PureComponent {
  static navigationOptions = {
    title: 'Write your new blog'
  }

  titleInput = undefined
  contentInput = undefined

  state = {
    title: '',
    content: '',
  }

  updateTitle = (text) => {
    this.setState({ title: text })
  }

  updateContent = (text) => {
    this.setState({ content: text })
  }

  focusContentInput = () => {
    if (this.contentInput?.focus) {
      this.contentInput.focus()
    }
  }

  onSubmitForm = () => {
    const params = {
      mode: 'PREVIEW',
      blog: {
        title: this.state.title,
        content: this.state.content,
      },
    }

    this.props.navigation.navigate({
      routeName: 'BLOG_CONTENT',
      params,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        scrollEnabled={false}
      >
        <TextInput
          ref={(ref) => { this.titleInput = ref }}
          placeholder="Title"
          value={this.state.title}
          onChangeText={this.updateTitle}
          onSubmitEditing={this.focusContentInput}
        />
        <TextInput
          ref={(ref) => { this.contentInput = ref }}
          style={styles.blogContentInput}
          placeholder="Add your content here..."
          value={this.state.content}
          onChangeText={this.updateContent}
          multiline
        />
        <Button
          style={styles.submitButton}
          title="Submit"
          onPress={this.onSubmitForm}
        />
      </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  blogContentInput: {
    flex: 1,
    marginTop: 16,
  },
  submitButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
})

BlogEditing.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default BlogEditing
