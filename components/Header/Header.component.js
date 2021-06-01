import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        // paddingTop: '36px',
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: '1.2rem'
    }
})

export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </View>
    )
}
