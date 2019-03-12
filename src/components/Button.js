import React, { PureComponent } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import Text from './Text'

class Button extends PureComponent {
  render() {
    const backgroundStyle = [
      styles.background,
      {
        backgroundColor: this.props.color,
      },
      this.props.style,
    ]

    return (
      <TouchableOpacity
        style={backgroundStyle}
        onPress={this.props.onPress}
        activeOpacity={0.8}
      >
        <Text
          style={[styles.title, this.props.textStyle]}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  title: {
    color: 'white',
  },
})

Button.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  title: PropTypes.string,
}

Button.defaultProps = {
  color: 'green',
  onPress: () => {},
  title: '',
}

export default Button
