import React from 'react'

import YiMaPage from '../YiMa/index'

import {
  Route,
  Switch,
  useHistory,
  useLocation,
  HashRouter as Router
} from 'react-router-dom'


import './style.css'

import ava from '../../static/userAva.jpg'

import RightArrow from '../../static/common/triangle.png'

// const features = [ '姨妈周期', 'To Do List', '照片']

const features = [
  {
    routePath: 'YiMa',
    routeLabel: '姨妈周期'
  },
  {
    routePath: 'ToDoList',
    routeLabel: 'To Do List'
  },
  {
    routePath: 'Photo',
    routeLabel: '照片'
  }
]

const JustMe = () => {

  const history = useHistory()

  const goPage = (routePath) => {
    history.push(routePath)
  }

  return (
    <div className='just-me' > 
      <div className='user' >

          <div className='user-ava' >
              <img 
                className='user-ava-img' 
                src={ava} 
                alt=""
              />
          </div>
        
          <div className='user-name' >
              姬儒涵
          </div>

          <div className='tag' >
              小公主好吧(*^▽^*)
          </div>

      </div>

      <div className='features' >
        {
          features.map( item => (
            <div className='feature-item' key={item.routePath} onClick={() => goPage(item.routePath)}>
              <div className='feature-item-label' >
                  {item.routeLabel}
              </div>
              <div className='icon' >
                <img  className='right-arrow' src={RightArrow} alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default JustMe


