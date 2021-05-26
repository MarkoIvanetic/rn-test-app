import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import { StatusBar } from 'expo-status-bar'
import {
    Button,
    AsyncStorage,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native'

export default function App() {
    return <View style={styles.container} />
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingBottom: 60,
        marginTop: 60
    }
})
