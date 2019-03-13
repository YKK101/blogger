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
    const { type, color } = this.props
    const backgroundStyle = [
      styles.background,
      type === 'FILL' && {
        backgroundColor: color,
      },
      type === 'OUTLINE' && {
        borderWidth: 1,
        borderColor: color,
      },
      this.props.style,
    ]

    const textStyle = [
      styles.title,
      type !== 'FILL' && { color },
      this.props.textStyle
    ]

    return (
      <TouchableOpacity
        style={backgroundStyle}
        onPress={this.props.onPress}
        activeOpacity={0.8}
        hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}
      >
        <Text
          style={textStyle}
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
    fontWeight: 'bold',
  },
})

Button.propTypes = {
  type: PropTypes.oneOf(['FILL', 'OUTLINE', 'GHOST']),
  color: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  title: PropTypes.string,
}

Button.defaultProps = {
  type: 'FILL',
  color: 'green',
  onPress: () => {},
  title: '',
}

export default Button
