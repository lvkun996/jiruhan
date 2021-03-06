
import React, { useEffect } from 'react'

import { Button,  Modal } from 'antd-mobile'

const PhotoWall = () => {

  useEffect(() => {
    document.title = '你'
  }, [])

  const goPhotoPage = () => {
    window.location.href = 'https://lvkun996.github.io/photo/'
  }

  return (
    <div>
      <Button
        color='success'
        onClick={() =>
          Modal.alert({
            content: '提示: 下个页面有声音',
            closeOnMaskClick: true,
            onConfirm: () => {
              console.log('Confirmed')
              goPhotoPage()
            },
          })
        }
      >
        看照片
      </Button>
    </div>
  )

}

export default PhotoWall