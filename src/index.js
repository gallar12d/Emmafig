import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  HashRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';

import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FaqMaster from './FaqMaster';


const routing = (
    <Router >
      <div>
        <Switch>
            <Route exact path="/" component={App} /> 
            <Route exact path="/faq" component={FaqMaster} />             
            <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
