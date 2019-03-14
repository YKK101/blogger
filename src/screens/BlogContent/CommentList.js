import React, { PureComponent } from 'react'
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  Separator,
  Text,
} from '@components'

class CommentList extends PureComponent {
  renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.user}>{`${item.userName} said...`}</Text>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    )
  }

  generateKey = (item) => item.id

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={this.generateKey}
        ItemSeparatorComponent={Separator}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  user: {
    color: 'gray',
  },
  comment: {
    marginTop: 8,
  },
})

CommentList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    userName: PropTypes.string,
    comment: PropTypes.string,
  })),
}

export default CommentList
