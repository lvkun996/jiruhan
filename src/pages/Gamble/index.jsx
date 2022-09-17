import React, { useRef, useState } from 'react'
import { LuckyWheel, LuckyGrid } from '@lucky-canvas/react'
import GO from './GabmbleOp'
import { useEffect } from 'react'
import dayjs from 'dayjs'
import './style.css'
import { Button, Dialog, Input, Toast } from 'antd-mobile'
import { useGetState } from 'ahooks'

const Gamble = () => {

  const [blocks] = useState([
    { padding: '10px', background: '#d3adf7' }
  ])

  const [prizes] = useState([
    { range: 50 , fonts: [{ fontSize: '16',  text: '再来一次', fontColor: '#000', id: 0 }] },
    { range: 8 , fonts: [{fontSize: '16', text: '¥100', fontColor: '#ffd666'  } ] },
    { range: 3 , fonts: [{ fontSize: '16',text: '极小概率轮空', fontColor: '#fff' } ] },
    { range: 1 , fonts: [{fontSize: '16', text: '和主人打一次视频😘', fontColor: '#fa541c'  } ] },
    { range: 8, fonts: [{fontSize: '16', text: '-¥20'  } ] },
    { range: 10 , fonts: [{fontSize: '16', text: '亲属卡+50', fontColor: '#d3f261' } ] },
    { range: 5 , fonts: [{fontSize: '16', text: '亲属卡 -20'  } ] },
    { range: 2 , fonts: [{fontSize: '16', text: '积分+2',id: 2  } ] },
    { range: 12 , fonts: [{fontSize: '16', text: '¥20', fontColor: '#fff' } ] },
    { range: 2 , fonts: [{fontSize: '16', text: 'pdd购物车随机清三个', fontColor: '#f5222d'  } ] },
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


  const [ count, setCount ] = useState(0) 

  const [ visable, setVisable ] = useState(false) 
  
  const [ GabmleCode, setGabmleCode, getGabmleCode ] = useGetState()

  const [ score, setScore, getScore] = useGetState()

  useEffect(() => {
    setScore(GO.getCount())
  }, [])

  const onConfirm = () => {
    console.log('onConfirm:', getGabmleCode());
  
    verifyCode()
  }

  const openDialog = () => {

    Dialog.confirm({
      content: <Input value={GabmleCode} placeholder='请输入兑换码' onChange={(text) => setGabmleCode(text)} />,
      onConfirm: onConfirm
    })

  }


  const verifyCode = () => {
      console.log('');
    if (getGabmleCode() === '0077') {
      Toast.show('积分+1')
      console.log('????');
      GO.change(1)
      setGabmleCode()
      setScore(GO.getCount())
    } else {
      Toast.show('你在干什么')
    }


  }

  // prize.fonts[0].text
  const gambleEnd = ( prize ) => {
    console.log(prize.fonts[0].text);
    if (prize.fonts[0].id === 2) {
      GO.change(1)
    } else if (prize.fonts[0].id === 0) {
      GO.change(0)
    } else {
      GO.change(-1)
    }

    setScore(GO.getCount())
    
  }
  return (
    <div className='Gamble' > 

      <Button className='exchange-code' color='primary' onClick={openDialog} >
        兑换码
      </Button>

      <Button className='exchange-score' color='primary' onClick={openDialog} >
        积分({getScore()})
      </Button>

      <LuckyWheel 
        ref={myLucky}
        width="300px"
        height="300px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={() => { // 点击抽奖按钮会触发star回调
          if (GO.getCount() <= 0) {
            return
          } 
          myLucky.current.play()
          setTimeout(() => {
          //   const index = Math.random() * 6 >> 0
            myLucky.current.stop()
          }, 2500)
        }}
        onEnd={prize => gambleEnd(prize)}  
      ></LuckyWheel>
    </div>
  )
}
export default Gamble