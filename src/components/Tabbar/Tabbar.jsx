
import React, { useState } from 'react'

import { Badge, TabBar , NavBar} from 'antd-mobile'

import Home from '../../pages/Home/index'

import DeliciousCloud from '../../pages/DeliciousCloud/index'

import JustMe from '../../pages/JustMe/index'

import YiMaPage from '../../pages/YiMa/index'

import PhotoWall from '../../pages/PhotoWall/index'

import './TabbarStyles.css'

import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
  PictureOutline,
  HeartOutline
} from 'antd-mobile-icons'

import {
  Route,
  Switch,
  useHistory,
  useLocation,
  HashRouter as Router
} from 'react-router-dom'

const onePageName = ['/', '/todo', '/PhotoWall', '/me']

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
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '好吃的',
      icon: <HeartOutline />,
    },
    {
      key: '/PhotoWall',
      title: '照片',
      icon: <PictureOutline />,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <>
      {
        onePageName.includes(pathname) ? 
        <TabBar 
        activeKey={pathname} 
        onChange={value => setRouteActive(value)}
        >
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
        : 
        null
      }
    </>
 
  )
}


function Message() {
  return <div>我的消息</div>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  console.log(2233);

  const pathname = '/'

  const onChange = () => {
    console.log(223);
  }

  return (
    <Router initialIndex={1}   >
        <div className='app'>
        {/* <div className='top'>
          <NavBar>NavBar</NavBar>
        </div> */}
        <div className='main-container'>
            <Switch >
                <Route exact path='/' >
                  <Home />
                </Route>
                <Route exact path='/todo'>
                  <DeliciousCloud />
                </Route>
                <Route exact path='/PhotoWall'>
                  <PhotoWall />
                </Route>
                <Route exact path='/me'>
                  <JustMe />
                </Route>
                <Route exact path='/YiMa'>
                  <YiMaPage />
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
