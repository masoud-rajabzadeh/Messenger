import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import Login from "./components/Login";
import Chats from "./components/Chats";

//Contexts
import AuthContextProvider from "./Context/AuthContextProvider";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
};

export default App;
