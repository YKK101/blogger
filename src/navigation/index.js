import { createStackNavigator } from 'react-navigation'
import BlogEditing from '@screens/BlogEditing'
import BlogContent from '@screens/BlogContent'

const AppNavigator = createStackNavigator({
  BLOG_EDITING: {
    screen: BlogEditing,
  },
  BLOG_CONTENT: {
    screen: BlogContent,
  },
}, {
  headerBackTitleVisible: false,
})

export default AppNavigator
