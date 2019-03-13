import React, { PureComponent } from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  Text,
  Title,
} from '@components'

const mock = {
  title: 'Get Start',
  content: `
  Hello
  Today is Sunday
  `,
}

class BlogContent extends PureComponent {
  render() {
    const { blog } = this.props.navigation.state.params
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView />
        <View style={styles.contentContainer}>
          <Title>{blog.title}</Title>
          <Text>{blog.content}</Text>
        </View>
        <SafeAreaView />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
})

BlogContent.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        mode: PropTypes.oneOf(['PREVIEW', 'VIEW']).isRequired,
        blog: PropTypes.shape({
          title: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogContent
