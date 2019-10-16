import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ForgetPassword from './Pages/ForgetPassword';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/forget_password" component={ForgetPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
