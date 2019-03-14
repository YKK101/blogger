import { createStackNavigator } from 'react-navigation'
import BlogEditing from '@screens/BlogEditing'
import BlogContent from '@screens/BlogContent'
import BlogFeed from '@screens/BlogFeed'

const AppNavigator = createStackNavigator({
  BLOG_EDITING: {
    screen: BlogEditing,
  },
  BLOG_CONTENT: {
    screen: BlogContent,
  },
  BLOG_FEED: {
    screen: BlogFeed,
  },
}, {
  initialRouteName: 'BLOG_FEED',
  headerBackTitleVisible: false,
})

export default AppNavigator
