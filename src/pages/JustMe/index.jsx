import React, { useEffect } from 'react'

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

import {  Dialog,  } from 'antd-mobile'

import warnPic from '../../static/warn.jpg'

const features = [
  {
    routePath: 'YiMa',
    routeLabel: '姨妈周期'
  },
  {
    routePath: 'Tag',
    routeLabel: '标签'
  },
  {
    routePath: 'versionRecords',
    routeLabel: '更新记录'
  },
  // {
  //   routePath: 'TimeLine',
  //   routeLabel: '时间线'
  // },
  {
    routePath: 'Photo',
    routeLabel: '想到了再加 这里先空着'
  }
]

const JustMe = () => {

  useEffect(() => {
    document.title = '呀'
  }, [])

  const history = useHistory()

  const goPage = (routePath) => {
    if (routePath === 'Photo') {
      Dialog.alert({
        image: warnPic,
        title: 'warning',
        content: '说了想到了再加你不信是吧'
      })
    } else {
      history.push(routePath)
    }
  }

  return (
    <div className='just-me' > 
      <div className='just-me-user' >

          <div className='just-me-user-ava' >
              <img 
                className='just-me-user-ava-img' 
                src={ava}
                alt=""
              />
          </div>
        
          <div className='just-me-user-name' >
            姬贴贴
          </div>

          <div className='just-me-tag' >
            我好想你 已经不能自己🤧
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


