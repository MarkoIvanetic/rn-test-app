import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [items, setItems] = useState([]);
	const [newName, setNewName] = useState('');

	const createItem = () => {
		if (!newName) {
			return;
		}
		setItems([...items, { id: uuid.v4(), text: newName }]);
		setNewName('');
	};

	return (
		<View style={styles.container}>
			<View>
				{items.map(item => {
					return (
						<View style={styles.item}>
							<Text>{item.text}</Text>
							<Button
								style={styles.removeBtn}
								title='X'
								onPress={() => {
									setItems(items.filter(i => i.id !== item.id));
								}}></Button>
						</View>
					);
				})}
				<TextInput
					style={styles.input}
					placeholder='Enter text'
					onChangeText={setNewName}
					value={newName}
				/>
				<Button title='ADD' disabled={!newName} onPress={createItem}></Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		marginTop: 60,
	},
	input: {
		height: 40,
		borderBottomColor: 'black',
		marginBottom: 10,
		borderBottomWidth: 1,
	},
	item: {
		flexDirection: 'row',
	},
	removeBtn: {
		width: 40,
	},
});

// <Text>{outputText}</Text>
