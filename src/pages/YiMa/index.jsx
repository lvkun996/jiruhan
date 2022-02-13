import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import {  NavBar} from 'antd-mobile'

import { useHistory } from 'react-router-dom'

import './style.css'

const YiMa = () => {
  const data = [
    {
      time: '2021-12-25',
      duraDay: 7,
    },
    {
      time: '2022-02-07',
      duraDay: 4,
    },
  ];
  const config = {
    data,
    width: 350,
    xField: 'time',
    yField: 'duraDay',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
        width: 350,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      time: {
        alias: '开始日期',
      },
      duraDay: {
        alias: '持续时间',
      },
    },
  };

  const history = useHistory()

  const onBack = () => {
    history.goBack()
  }

  return <div>
    <div className='yima-navbar'>
      <NavBar
        onBack={onBack}
      >
        姨妈周期
      </NavBar>
    </div>
    <Column {...config} />
    <div className='current-law' >
        <div>当前间隔：<span className='key-law' >37天</span></div>
        <div>预测下次：<span className='key-law' >2022-03-14</span></div>
    </div>
    <div className='law' >
      姨妈是否规律、持续时间、预测下次时间
      <br />
      需要更多数据计算...
    </div>
  </div>
};

export default YiMa