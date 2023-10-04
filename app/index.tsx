import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function MainMenu() {
  if (
    !new (class {
      x;
    })().hasOwnProperty("x")
  )
    throw new Error("Transpiler is not configured correctly");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jamb</Text>
      <View style={styles.divider}></View>
      <View style={styles.menu}>
        <Button title="Nastavi" />
        <Button title="Nova igra" />
        <Button title="Istorija" />
        <Button title="Pomoć" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  menu: {
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontSize: 96,
    marginTop: 96,
  },
  divider: {
    flexGrow: 1,
  },
});
