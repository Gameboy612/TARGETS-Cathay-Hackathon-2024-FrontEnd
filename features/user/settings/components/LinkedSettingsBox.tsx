import { View, Text, TouchableOpacity } from 'react-native'
import React, { forwardRef } from 'react'
import { SettingsBox, SettingsBoxProps } from './SettingsBox'
import { Link } from 'expo-router'

export type LinkedSettingsBoxProp = SettingsBoxProps & {
    href: string
}

export const LinkedSettingsBox = forwardRef(function LinkedSettingsBox ({settings, icon, href}: LinkedSettingsBoxProp, ref: any) {
  return (
    <Link href={href} asChild>
        <SettingsBox ref={ref} settings={settings} icon={icon}/>
    </Link>
  )
})