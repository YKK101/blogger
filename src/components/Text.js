import React, { PureComponent } from 'react'
import {
  Text as RNText,
  StyleSheet,
} from 'react-native'

class Text extends PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[styles.text, this.props.style]}
      />
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  }
})

export default Text
