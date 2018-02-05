import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import App from 'layouts/App'
import { DataStructureExample, SelectorsExample, ObjectLiteralsExample } from 'screens'
import storeConfigurator from 'services/ReduxStoreConfigurator'

const store = storeConfigurator.configureStore()

const history = createBrowserHistory()

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path='/object-literals' component={ObjectLiteralsExample} />
          <Route path='/selectors' component={SelectorsExample} />
          <Route path='/data-structure' component={DataStructureExample} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

export default AppRouter
