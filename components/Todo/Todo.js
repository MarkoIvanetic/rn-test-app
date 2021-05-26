import React, { useState } from "react";
import uuid from "react-native-uuid";
import { StatusBar } from "expo-status-bar";
import { Button, AsyncStorage, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity } from "react-native";

const generateItem = (n) => {
  return new Array(n).fill(undefined).map((arb, i) => {
    return {
      id: uuid.v4(),
      text: "Test item #" + i,
    };
  });
};

export default function Todo() {
  const [items, setItems] = useState(generateItem(10));
  const [newName, setNewName] = useState("");

  const createItem = () => {
    if (!newName) {
      return;
    }
    setItems([...items, { id: uuid.v4(), text: newName }]);
    setNewName("");
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Enter text" onChangeText={setNewName} value={newName} />
        <Button title="ADD" disabled={!newName} onPress={createItem}></Button>
        <FlatList
          data={items}
          style={styles.itemList}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setItems(items.filter((i) => i.id !== item.id));
                }}
              >
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 60,
    marginTop: 60,
  },
  input: {
    height: 40,
    padding: 10,
    borderBottomColor: "black",
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemList: {
    backgroundColor: "rgba(210, 240, 240, 0.5)",
    marginBottom: 120,
  },
  item: {
    backgroundColor: "rgb(210, 240, 240)",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    maxWidth: 400,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#333",
  },
  itemText: {
    flex: 1,
  },
  removeBtn: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
});

// <Text>{outputText}</Text>
