import React from 'react'
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>可视化简历平台</div>
          <div>这是 Electron + React 项目</div>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
