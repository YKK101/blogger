import React, { PureComponent } from 'react'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import store from '@redux/store'
import AppNavigator from '@navigation'

const AppContainer = createAppContainer(AppNavigator)

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App
