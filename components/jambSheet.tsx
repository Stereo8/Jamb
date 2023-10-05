import { JambSheet } from "../stores/jambSheet";
import { observer, inject } from "mobx-react";
import { Key, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Column } from "./column";

type Props = { jambSheet: JambSheet };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const JambSheetDisplay = observer((props: Props) => {
  return (
    <View style={styles.container}>
      <Column column={props.jambSheet.downColumn}></Column>
      <Column column={props.jambSheet.upColumn}></Column>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
