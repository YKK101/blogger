import React, { PureComponent } from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  Button,
  Text,
  Title,
} from '@components'
import { createBlog } from '@redux/blog'
import BlogComment from './BlogComment'

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
    const { blog, mode } = this.props.navigation.state.params
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        extraScrollHeight={40}
      >
        <SafeAreaView />
        <View style={styles.contentContainer}>
          <Title>{blog.title}</Title>
          <Text style={styles.content}>{blog.content}</Text>
        </View>
        { mode === 'VIEW' && (
          <BlogComment id={blog.id} />
        )}
        <SafeAreaView />
      </KeyboardAwareScrollView>
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
  content: {
    marginTop: 8,
  },
})

BlogContent.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        mode: PropTypes.oneOf(['PREVIEW', 'VIEW']).isRequired,
        blog: PropTypes.shape({
          id: PropTypes.string,
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
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  createBlog: (payload) => { dispatch(createBlog(payload)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogContent)
