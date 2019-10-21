import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Registration } from "./components/Registration";
import { SignIn } from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/register' component={Registration} />
        <Route path='/login' component={SignIn} />
      </div>
    </BrowserRouter>
  );
}

export default App;
