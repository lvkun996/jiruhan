import React, { useState, useEffect } from "react";

import { useInterval } from '../../hooks/index'

import { formatDuring } from '../../utils/utils' 

import dayjs from "dayjs";

import manImg from '../../static/home/man.jpg'

import womanImg from '../../static/home/woman.jpg'

import './style.css'

const TimeCom = () => {

  
  const [ time, setTime ] = useState('海绵宝宝还在算时间...')

  useEffect(() => {
    document.title = '生❤'
  }, [])

  useEffect(() => {

    setInterval(() => {

      const day1 = new Date().getTime()

      const day2 = new Date('2022-01-01 11:22:00').getTime()

      const timeStamp = day1 - day2

      setTime(formatDuring(timeStamp))

    }, 60);

  }, [])

  return  <div className="commemorate-day" >
  <div className="commemorate-day-title" >
      {`已经在一起`}
  </div>
  <div className="commemorate-day-time" >
    { time }
  </div>
</div>
}

const Home = () => {

  return (
    <div className="home" >
      <div className="home-user" >
        <div className="user-ava" >
          <img  className="manImg" src={manImg} alt="" />
          <img className="womanImg" src={womanImg} alt="" />
        </div>
      </div>
      <TimeCom />
    </div>
  )
}


export default Home


