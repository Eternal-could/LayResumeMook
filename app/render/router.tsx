import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';

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
