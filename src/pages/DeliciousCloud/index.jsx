import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WordCloud } from '@ant-design/plots';
import { foodData } from './food'

const DemoWordCloud = () => {

  // const data = foodData.map((item) => ({
  //   name: item.name,
  //   value: item.value,
  // }));
  
  useEffect(() => {
    document.title = '日❤'
  }, [])

  const config = {
    data: foodData,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: 16,
      rotation: 0,
    }

  };
  return <WordCloud {...config} />;
};

export default DemoWordCloud
