import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import './index.css';
import Main from './Main'
import Login from './Login'
import Contact from './contact/Contact'
import Experience from './experience/Experience'
import Gallery from './experience/Gallery'
import Search from './search/Search'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* main page */}
        <Route exact path="/"><Main/></Route>
        {/*login page */}
        <Route exact path="/login"><Login/></Route>
        {/* contact page */}
        <Route exact path="/contact"><Contact/></Route>
        {/* experience page */}
        <Route exact path="/experience"><Experience/></Route>
        {/* gallery page */}
        <Route exact path="/gallery"><Gallery/></Route>
        {/* search page */}
        <Route exact path="/search"><Search/></Route>
        






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
