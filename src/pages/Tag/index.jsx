import React, { useEffect, useState } from "react";

import ReactDOM from 'react-dom';

import { WordCloud } from '@ant-design/plots';

import NavBarCom from "../../components/NavBar/Nabbar";

import tag from './tag.js'

import './style.scss'
 
const Tag = () => {

  const [ data, setData ] = useState(tag)

  const config = {
        data: data,
        wordField: 'name',
        weightField: 'value',
        colorField: 'name',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: 16,
            rotation: 0,
        }
    }

  return <div className="tag" >
      <div className="tag-navbar" >
        <NavBarCom  title="我的标签" />
      </div>

    <WordCloud {...config} />

  </div>

}


export default Tag