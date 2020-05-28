import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  const Login = lazy(() => import('./components/Login/Login'));
  const Home = lazy(() => import('./components/Home/Home'));
  const Response = lazy(() => import('./components/Response/Response'));
  const Notification = lazy(() => import('./components/Notification/Notification'));
  const DrawerSideNavBar = lazy(() => import('./components/DrawerSideNavBar/DrawerSideNavBar'));
  const NotFound = lazy(() => import('./components/NotFound/NotFound'));

  return (
    <div>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home/:slug" component={Home} />
            <Route exact path="/response">
              <Response />
            </Route>
            <Route exact path="/notification" component={Notification} />
            <Route path="/drawer">
              <DrawerSideNavBar>
                <NotFound />
              </DrawerSideNavBar>
            </Route>
            <Route component={NotFound} />
          </Switch>
      </Suspense>
    </div>
  );
}

export default App;
