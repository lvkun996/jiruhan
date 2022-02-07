import React, { useState, useEffect } from "react";

import { useInterval } from '../../hooks/index'

import { formatDuring } from '../../utils/utils' 

import dayjs from "dayjs";

import './style.less'


const TimeCom = () => {

  const [ time, setTime ] = useState('海绵宝宝还在算时间...')

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
      <TimeCom />
    </div>
  )
}


export default Home


