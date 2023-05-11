import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabBarNavigation from './TabBarNavigation'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TabBarNavigation"
        component={TabBarNavigation}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation
