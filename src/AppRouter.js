import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import App from 'layouts/App'
import FinalAppConnector from 'connectors/FinalAppConnector'
import ComplexDataScreen from 'screens/ComplexDataScreen'
import storeConfigurator from 'services/ReduxStoreConfigurator'

const store = storeConfigurator.configureStore()

const history = createBrowserHistory()

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path='/complex-data' component={ComplexDataScreen} />
          <Route path='/final-app' component={FinalAppConnector} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

export default AppRouter
