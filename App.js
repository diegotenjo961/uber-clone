import React from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { store } from './src/store'

import HomeScreen from './src/screens/HomeScreen'

export default function App() {
  return (
	  <Provider store={store}>
		  <SafeAreaProvider>
			  <HomeScreen />
		  </SafeAreaProvider>
	  </Provider>
  );
}
