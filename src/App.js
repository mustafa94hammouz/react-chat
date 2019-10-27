import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Registration } from "./components/Registration";
import SignIn from "./components/SignIn";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/register' component={Registration} />
        <Route path='/login' component={SignIn} />
        <Route path='/profile' component={UserProfile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
