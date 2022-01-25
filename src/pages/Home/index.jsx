import React, { useState, useEffect } from "react";

import { useInterval } from '../../hooks/index'

import dayjs from "dayjs";

import './style.less'


const TimeCom = () => {

  const [ time, setTime ] = useState('海绵宝宝还在算时间...')

  useEffect(() => {

    setInterval(() => {

      const day1 = dayjs()

      const day2 = dayjs('2022-01-01')

      const timeStamp = day1.diff(day2)

      setTime(dayjs(timeStamp).format('DD天HH小时mm分钟ss秒SSS毫秒'))

    }, 1);

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


