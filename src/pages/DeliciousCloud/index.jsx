import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WordCloud } from '@ant-design/plots';
import { foodData } from './food'

const DemoWordCloud = () => {

  const data = foodData.map((item) => ({
    name: item.name,
    value: item.value,
  }));
  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: 16,
      rotation: 0,
    },

    placementStrategy(word, index, words) {
      const width = this.ele.clientWidth;
      const height = this.ele.clientHeight;
      const length = words.length;
      return {
        x: (width / (length + 1)) * (index + 1),
        y: (height / (length + 1)) * (index + 1),
      };
    },
  };
  return <WordCloud {...config} />;
};

export default DemoWordCloud
