import React, { useRef, useState } from 'react'
import { LuckyWheel, LuckyGrid } from '@lucky-canvas/react'

const imgs =  { src: 'https://avatars.githubusercontent.com/u/46644748?v=4', width: '86px', height: '86px' } 

const Gamble = () => {

  const [ count, setCount ] = useState(0) 

  const [blocks] = useState([
    { padding: '10px', background: '#869cfa' }
  ])
  
  const [prizes] = useState([
    {  imgs: [imgs] },
    {  imgs: [imgs] },
    {  imgs: [imgs] },
    {  imgs: [imgs] },
    {  imgs: [imgs] },
    {  imgs: [imgs] },
  ])
  const [buttons] = useState([
    { radius: '40%', background: '#617df2' },
    { radius: '35%', background: '#afc8ff' },
    {
      radius: '30%', background: '#869cfa',
      pointer: true,
      fonts: [{ text: 'start', top: '-10px' }]
    }
  ])
  const myLucky = useRef()

  return (
    <div> 
      <LuckyWheel 
        ref={myLucky}
        width="300px"
        height="300px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={() => { // 点击抽奖按钮会触发star回调
          myLucky.current.play()
          setTimeout(() => {
            const index = Math.random() * 6 >> 0
            myLucky.current.stop(index)
          }, 2500)
        }}
        onEnd={prize => { // 抽奖结束会触发end回调
          alert('恭喜你抽到 ' + prize.fonts[0].text + ' 号奖品')
        }}  
      ></LuckyWheel>
    </div>
  )
}
export default Gamble