import { JambSheet } from "../stores/jambSheet";
import { observer, inject } from "mobx-react";
import { Key, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = { jambSheet: JambSheet };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const JambSheetDisplay = observer((props: Props) => {
  const upCol = Object.entries(props.jambSheet.upColumn.columnData).map(
    // @ts-ignore
    ([field, value]) => (
      <Text
        key={field}
        style={styles.text}
        onPress={() => {
          props.jambSheet.upColumn.setField(field, getRandomInt(1, 100));
          console.log(field);
        }}
      >
        {`${field}: ${value ?? ""}`}
      </Text>
    )
  );
  const downCol = Object.entries(props.jambSheet.downColumn.columnData).map(
    // @ts-ignore
    ([field, value]) => (
      <Text key={field} style={styles.text}>
        {`${field}: ${value ?? ""}`}
      </Text>
    )
  );

  console.log(props.jambSheet.upColumn.columnData);

  return (
    <View style={styles.container}>
      <View style={styles.column}>{upCol}</View>
      <View style={styles.column}>{downCol}</View>
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
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 24,
    padding: 8,
    borderColor: "#000",
    borderWidth: 2,
    borderStyle: "solid",
    width: 130,
  },
});
