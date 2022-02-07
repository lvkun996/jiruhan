
import React, { useState } from 'react'

import { Badge, TabBar , NavBar} from 'antd-mobile'

import Home from '../../pages/Home/index'

import DeliciousCloud from '../../pages/DeliciousCloud/index'

import JustMe from '../../pages/JustMe/index'

import './TabbarStyles.css'

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import {
  Route,
  Switch,
  useHistory,
  useLocation,
  HashRouter as Router
} from 'react-router-dom'

const Bottom = () => {

  const history = useHistory()
  
  const location = useLocation()

  const { pathname } = location

  const setRouteActive = (value) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/',
      title: 'Hello',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: 'Delicious Cloud',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: 'Photo Wall',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: 'just me',
      icon: <UserOutline />,
    },
  ]
//  activeKey={pathname} onChange={value => setRouteActive(value)}
  return (
    <TabBar 
      activeKey={pathname} 
      onChange={value => setRouteActive(value)}
    >
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}


function Message() {
  return <div>我的消息</div>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router initialIndex={1} >
      <div className='app'>
        <div className='top'>
          <NavBar>NavBar</NavBar>
        </div>
        <div className='main-container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/todo'>
              <DeliciousCloud />
            </Route>
            <Route exact path='/message'>
              <Message />
            </Route>
            <Route exact path='/me'>
              <JustMe />
            </Route>
          </Switch>
        </div>
        <div className='bottom'>
          <Bottom />
        </div>
      </div>
    </Router>
  )
}
