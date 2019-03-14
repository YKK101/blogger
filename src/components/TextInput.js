import React, { PureComponent } from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  ViewPropTypes,
} from 'react-native'

class TextInput extends PureComponent {

  input = undefined

  focus = () => {
    if (this.input?.focus) {
      this.input.focus()
    }
  }

  clear = () => {
    if (this.input?.clear) {
      this.input.clear()
    }
  }

  isFocused = () => {
    return this.input?.isFocused() || false
  }

  render() {
    return (
      <RNTextInput
        ref={(ref) => { this.input = ref }}
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
    padding: 8,
  },
})

TextInput.propTypes = {
  style: ViewPropTypes.style,
}

export default TextInput
