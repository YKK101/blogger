import React, { PureComponent } from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Button,
  Separator,
  Title,
  Text,
} from '@components'
import NoFeed from './NoFeed'

class BlogFeed extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return ({
      title: 'Blogger',
      headerRight: (
        <Button
          title="Create"
          type="GHOST"
          color="#007AFF"
          onPress={() => {
            navigation.navigate({ routeName: 'BLOG_EDITING' })
          }}
        />
      )
    })
  }

  openBlog = (item) => {
    this.props.navigation.navigate({
      routeName: 'BLOG_CONTENT',
      params: {
        mode: 'VIEW',
        blog: item,
      }
    })
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { this.openBlog(item) }}
      >
        <View style={styles.card}>
          <Title>{item.title}</Title>
          <Text
            style={styles.cardContent}
            numberOfLines={2}
          >
            {item.content}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  generateKey = (item) => (item.id)

  render() {
    return (
      (this.props.blogData.length > 0) ? (
        <View style={styles.container}>
          <FlatList
            style={styles.feed}
            data={this.props.blogData}
            keyExtractor={this.generateKey}
            renderItem={this.renderItem}
            ItemSeparatorComponent={Separator}
          />
          <SafeAreaView />
        </View>
      ) : (
        <NoFeed />
      )
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  cartContent: {
    marginTop: 8,
  },
  container: {
    flex: 1,
  },
  feed: {
    flex: 1,
  },
})

BlogFeed.propTypes = {
  blogData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => {
  return {
    blogData: state.blog.data,
  }
}

export default connect(mapStateToProps)(BlogFeed)
