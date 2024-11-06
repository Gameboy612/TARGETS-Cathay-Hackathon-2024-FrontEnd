import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ImageSelector = ({style}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        
      }}
      >
      <Image
        style={{
          width: '100%',
          height: '100%'
        }}
        />
    </TouchableOpacity>
  )
}

export default ImageSelector