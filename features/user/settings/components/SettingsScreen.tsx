import { View, Text } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ui/ThemedView'
import { ThemedText } from '@/components/ui/ThemedText'
import TextInputWithIcon from '@/components/form/TextInputWithIcon'
import { ThemedButton } from '@/components/ui/ThemedButton'
import { Link, useNavigation } from 'expo-router'
import SettingsContainer from './SettingsContainer'
import { LinkedSettingsBox } from './LinkedSettingsBox'
import { SettingsBox } from './SettingsBox'
import { FIREBASE_AUTH } from '@/utils/FirebaseConfig'
import { signOut } from 'firebase/auth'
import useSignIn from '@/hooks/useSignIn'

export function SettingsScreen() {
  const logoutBtn = () => {
    signOut(FIREBASE_AUTH)
     .then(() => {
        console.log('User signed out!')
      })
     .catch((error) => {
        console.log('Error signing out:', error)
      })
  }
  
  return (
    <SettingsContainer
      viewProps={{ style: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 20,
      }
      }}
      textProps={{type: "title"}}
      title={"Settings"}
    >
      {/* <LinkedSettingsBox settings='Account' icon={{name: 'person', color: 'black'}} href='settings/account' />
      <LinkedSettingsBox settings='Privacy' icon={{name: 'key', color: 'black'}} href='settings/account' />
      <LinkedSettingsBox settings='Themes' icon={{name: 'color-palette', color: 'black'}} href='settings/account' /> */}
      <SettingsBox onPress={logoutBtn} settings='Log Out' icon={{name: 'lock-closed', color: 'black'}} />
    </SettingsContainer>
  )
}