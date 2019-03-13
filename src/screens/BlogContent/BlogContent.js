import React, { PureComponent } from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  Title,
} from '@components'
import { createBlog } from '@redux/blog'

class BlogContent extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { mode, onSave } = navigation.state.params
    return ({
      title: mode === 'VIEW' ? 'Blog' : 'Preview',
      headerRight: mode === 'VIEW' ? null : (
        <Button
          title="Save"
          type="GHOST"
          color="#007AFF"
          onPress={() => {
            if (onSave) { onSave() }
          }}
        />
      ),
    })
  }

  componentDidMount() {
    this.props.navigation.setParams({ onSave: this.onSave })
  }

  onSave = () => {
    if (this.props?.createBlog) {
      const { blog } = this.props.navigation.state.params
      this.props.createBlog({
        title: blog.title,
        content: blog.content,
      })
      this.props.navigation.popToTop()
    }
  }

  render() {
    const { blog } = this.props.navigation.state.params
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView />
        <View style={styles.contentContainer}>
          <Title>{blog.title}</Title>
          <Text>{blog.content}</Text>
        </View>
        <SafeAreaView />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
})

BlogContent.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        mode: PropTypes.oneOf(['PREVIEW', 'VIEW']).isRequired,
        blog: PropTypes.shape({
          title: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        }).isRequired,
        onSave: PropTypes.func,
      }).isRequired,
    }).isRequired,
    setParams: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => {
  console.warn(state)
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  createBlog: (payload) => { dispatch(createBlog(payload)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogContent)
