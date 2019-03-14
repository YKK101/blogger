import React, { PureComponent } from 'react'
import {
  View,
} from 'react-native'
import PropTypes from 'prop-types'

class Separator extends PureComponent {
  render() {
    const style = [
      {
        backgroundColor: this.props.color,
      },
      this.props.isVertical ? {
        height: '100%',
        width: this.props.weight,
      } : {
        height: this.props.weight,
        width: '100%',
      },
    ]

    return (
      <View style={style} />
    )
  }
}

Separator.propTypes = {
  isVertical: PropTypes.bool,
  weight: PropTypes.number,
  color: PropTypes.string,
}

Separator.defaultProps = {
  isVertical: false,
  weight: 1,
  color: 'lightgray',
}

export default Separator
