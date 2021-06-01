import React from 'react'
import PropTypes from 'prop-types'
import { Button, AppLoading, StyleSheet, Text, TextInput, View } from 'react-native'

const StartGame = () => {
    const handleOnNumberChange = () => {
        //
    }

    return (
        <View style={styles.root}>
            <Text>The game screen</Text>
            <View style={styles.title}>
                <Text>Select a number</Text>
                <TextInput keyboardType="mumber" onChange={handleOnNumberChange} />
                <View style={styles.buttonContainer}>
                    <Button onPress={() => {}} title="Reset" />
                    <Button onPress={() => {}} title="Confirm" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        alignItems: 'right'
    },
    title: {
        fontSize: '1.5rem',
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
})

StartGame.propTypes = {
    name: PropTypes.string,
    isChecked: PropTypes.bool
}
export default StartGame
