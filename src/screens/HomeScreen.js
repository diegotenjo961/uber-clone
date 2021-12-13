import React from 'react'
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native'

import tw from 'twrnc'

import NavOptions from '../components/NavOptions'

export default function HomeScreen() {
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
		      style={styles.image}
					source={{
						uri: 'https://links.papareact.com/gzs'
					}}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	image: {
		resizeMode: 'contain',
		width: 100, 
		height: 100,
	}
})
