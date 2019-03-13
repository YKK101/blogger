import { createStackNavigator } from 'react-navigation'
import BlogEditing from '@screens/BlogEditing'

const AppNavigator = createStackNavigator({
  BLOG_EDITING: {
    screen: BlogEditing,
  },
})

export default AppNavigator
