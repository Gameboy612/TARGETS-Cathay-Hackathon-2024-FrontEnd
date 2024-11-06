import { View, Text } from 'react-native'
import React from 'react'
import { ThemedView, ThemedViewProps } from '@/components/ui/ThemedView'
import { ThemedText, ThemedTextProps } from '@/components/ui/ThemedText'


export type PlaneSeatsContainerProp = ThemedViewProps & {
    viewProps: ThemedViewProps;
    textProps: ThemedTextProps;
    title: string;
    children: React.ReactNode;

};

const PlaneSeatsContainer = ({viewProps = {}, textProps = {}, title = "Plane Seats Screen", children}: PlaneSeatsContainerProp) => {
  return (
    <ThemedView {...viewProps} style={[{
        width: '100%',
        height: '100%'
    }, viewProps?.style]}>
      <ThemedText {...textProps}>{title}</ThemedText>
      {children}
    </ThemedView>
  )
}

export default PlaneSeatsContainer;