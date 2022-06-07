// import React, {useState,useEffect}from 'react';
// import logo from './logo.svg';
import "./App.css";
// import axios from 'axios';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import Login from "./Pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
