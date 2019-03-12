import React, { PureComponent } from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native'
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
    const data = mock
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView />
        <View style={styles.contentContainer}>
          <Title>{data.title}</Title>
          <Text>{data.content}</Text>
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

export default BlogContent
