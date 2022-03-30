import React from 'react'

import { Steps } from 'antd-mobile'

import './style.css'

const { Step } = Steps

// title='填写机构信息'
// status='finish'
// description='完成时间：2020-12-01 12:30'

const VersionRecords= () => {
  return (
    <div className='version-records' > 
        <Steps current={1} direction='vertical' >
          <Step title='音乐库' status='error' description='播放歌曲功能' />
          <Step title='增加版本记录' status='finish' description='2022-03-30' />
        </Steps>
    </div>
  )
}

export default VersionRecords


