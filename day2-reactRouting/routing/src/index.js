import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from './Home';
import Nav from './Nav';
import Store from './Store';
import Detail from './Details';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>

    <Route  component={Nav} >
      <Route path='/' component={Home} />
      <Route path='store' component={Store} />
      <Route path='products/:id' component={Detail} />
    </Route>
  </Router>,
  document.getElementById('root')
);
