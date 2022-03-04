import React, { useState, useEffect } from "react";

import { formatDuring, getDeviceModel } from '../../utils/utils'

import manImg from '../../static/home/man.jpg'

import womanImg from '../../static/home/woman.jpg'

import wxsdk from 'lk-wxsdk'

import './style.css'

const TimeCom = () => {
  
  const [ time, setTime ] = useState('海绵宝宝还在算时间...')

  useEffect(() => {

    setInterval(() => {

      const day1 = new Date().getTime()

      const day2 = getDeviceModel() === 1 ?  new Date('2022/01/01 11:22:00').getTime() : new Date('2022-01-01 11:22:00').getTime()

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


const Meet = () => {

  const [ time, setTime ] = useState('海绵宝宝还在算时间...')

  useEffect(() => {

    setInterval(() => {

      const day1 = new Date().getTime()

      const day2 = getDeviceModel() === 1 ?  new Date('2022/03/05 08:00:00').getTime() : new Date('2022-03-05 08:00:00').getTime()

      const timeStamp = day2 - day1

      setTime(formatDuring(timeStamp))

    }, 60);

  }, [])

  return  <div className="commemorate-day" >
  <div className="commemorate-day-title" >
      {`离下次见面还有`}
  </div>
  <div className="commemorate-day-time" >
    {/* { time } */}
    遥遥而无期
  </div>
</div>
}

const Home = () => {

  useEffect(() => {
    document.title = '想'
    console.log('223');
  }, [])


  return (
    <div className="home" >
      <div className="home-user" >
        <div className="user-ava" >
          <img  className="manImg" src={manImg} alt="" />
          <img className="womanImg" src={womanImg} alt="" />
        </div>
      </div>
      <TimeCom />
      <Meet />
    </div>
  )
}


export default Home


