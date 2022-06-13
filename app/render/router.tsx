import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from './container/root';
import Resume from './container/resume';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Root />
        </Route>
        <Route path="/resume" exact>
          <Resume/>
        </Route>
      </Switch>
      {/*重定向到首页*/}
      <Redirect to="/" />
    </HashRouter>
  )
}
export default Router
