import React, { PureComponent } from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  ViewPropTypes,
} from 'react-native'

class TextInput extends PureComponent {
  render() {
    return (
      <RNTextInput
        {...this.props}
        style={[styles.textInput, this.props.style]}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    minHeight: 40,
  },
})

TextInput.propTypes = {
  style: ViewPropTypes.style,
}

export default TextInput
