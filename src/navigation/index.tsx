import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppNavigation from './AppNavigation'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   )
// }

// const Stack = createNativeStackNavigator()

const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default NavigationRoot
