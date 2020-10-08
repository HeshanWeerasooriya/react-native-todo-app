import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandlern = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholderTextColor="white"
        style={styles.input}
        placeholder=" Add New Todo... "
        onChangeText={changeHandlern}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="#333"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginTop: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "#fff",
  },
});
