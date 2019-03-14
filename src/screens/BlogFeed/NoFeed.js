import React, { PureComponent } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import { Title } from '@components'

const message = '0 Blog\n\nLet\'s share something to our community using create button on top right :)'

class NoFeed extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Title style={styles.message}>
            {message}
          </Title>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  message: {
    textAlign: 'center',
    color: 'gray',
  },
})

export default NoFeed
