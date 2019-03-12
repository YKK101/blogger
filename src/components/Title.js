import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import Text from './Text'

class Title extends PureComponent {
  render() {
    return (
      <Text
        {...this.props}
        style={[styles.title, this.props.style]}
      />
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default Title
