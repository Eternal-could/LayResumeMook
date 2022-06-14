import React from 'react'
import ReactDOM from 'react-dom';
import Router from './router'

// 引入store
import store from './store';

// 引入Provider
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
