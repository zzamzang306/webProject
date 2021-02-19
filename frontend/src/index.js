import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import './index.css';
import Main from './Main'
import Login from './Login'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* main page */}
        <Route exact path="/"><Main/></Route>
        {/*login page */}
        <Route exact path="/login"><Login/></Route>






      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

  // links /signup
  // link /login
  // link /dashboard

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
