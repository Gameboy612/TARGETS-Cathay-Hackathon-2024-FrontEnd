import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export enum IconType {
    MatetrialIcon,
    FontAweomseIcon,
    Ionicon,
}
export type IconProps = { type: IconType.MatetrialIcon, name: keyof typeof MaterialIcons.glyphMap, size: number, color: string, style: any } |
            { type: IconType.FontAweomseIcon, name: keyof typeof FontAwesome.glyphMap, size: number, color: string, style: any } |
            { type: IconType.Ionicon, name: keyof typeof Ionicons.glyphMap, size: number, color: string, style: any }

export default function Icon({type, name, size, color, style}: IconProps) {
  switch (type) {
    case IconType.MatetrialIcon:
      return <MaterialIcons name={name} size={size} color={color} style={style}/>
    case IconType.FontAweomseIcon:
      return <FontAwesome name={name} size={size} color={color} style={style}/>
    case IconType.Ionicon:
      return <Ionicons name={name} size={size} color={color} style={style}/>
    default:
      return <Text>Type Not Found...</Text>
  }
}