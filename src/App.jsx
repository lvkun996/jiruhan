import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WordCloud } from '@ant-design/plots';

import { foodData } from './pages/DeliciousCloud/food'

import { Button } from 'antd-mobile'

import Tabbar from './components/Tabbar/Tabbar'

import YiMaPage from './pages/YiMa/index'

import {
  Route,
  Switch,
  useHistory,
  useLocation,
  HashRouter as Router
} from 'react-router-dom'

const DemoWordCloud = () => {

  return <div>
    <Tabbar />
    {/* <Router>
      <Switch>
       <Route exact path='/YiMa'>
          <YiMaPage />
        </Route>
      </Switch>
    </Router> */}
  </div>;
    
};

export default DemoWordCloud;
