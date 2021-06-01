import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import { Header } from './components/Header'
import { StartGame } from './screens/StartGame'

export default function App() {
    const [loaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    if (!loaded) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <Header title="Guess a number" />
            <StartGame title="Guess a number" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'open-sans'
    }
})
