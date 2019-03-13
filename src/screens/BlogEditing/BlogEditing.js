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
  onSubmitForm = () => {
    this.props.navigation.navigate({
      routeName: 'BLOG_CONTENT',
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TextInput />
        <TextInput
          style={styles.blogContentInput}
          multiline
        />
        <Button
          style={styles.submitButton}
          title="Submit"
          onPress={this.onSubmitForm}
        />
      </View>
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
