import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DiscoverScreen from '../views/discover'

const Tab = createBottomTabNavigator()

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F1D2B',
      }}
    >
      <Text>Home Screen</Text>
    </View>
  )
}

const TabBarNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name={'Discover'}
        component={DiscoverScreen}
        options={{ title: 'Podkes' }}
      />
      <Tab.Screen name={'Library'} component={HomeScreen} options={{}} />
      <Tab.Screen name={'Profile'} component={HomeScreen} options={{}} />
    </Tab.Navigator>
  )
}

export default TabBarNavigation
