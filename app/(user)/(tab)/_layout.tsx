import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import useSignIn from '@/hooks/useSignIn';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useSignIn()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].accent,
        tabBarInactiveBackgroundColor: Colors[colorScheme?? 'light'].background,
        tabBarActiveBackgroundColor: Colors[colorScheme?? 'light'].background,
      }}
      >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
