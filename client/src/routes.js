import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ForgetPassword from './Pages/ForgetPassword';
import NotFound from './component/layouts/error/NotFound';
import Profile from './Pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/forget_password" component={ForgetPassword} />
        <Route path="/profile" component={Profile} />
        <Route default component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
