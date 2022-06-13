import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from './container/root';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Root />
        </Route>
      </Switch>
      {/*重定向到首页*/}
      <Redirect to="/" />
    </HashRouter>
  )
}
export default Router
