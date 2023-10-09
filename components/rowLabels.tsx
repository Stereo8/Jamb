import { Text, View, StyleSheet } from "react-native";
import uuid from "react-uuid";

const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "Σ",
  "max",
  "min",
  "Σ",
  "kenta",
  "triling",
  "ful",
  "poker",
  "yamb",
  "Σ",
];

export const RowLabels = () => {
  return (
    <View style={styles.column}>
      <View style={styles.cell}>
        <Text style={styles.text}></Text>
      </View>
      {labels.map((label) => (
        <View key={uuid()} style={styles.cell}>
          <Text style={styles.text}>{label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minWidth: 40,
    maxWidth: 40,
  },
  text: {
    color: "#000",
    fontSize: 14,
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 2,
    borderStyle: "solid",
    maxWidth: 40,
    maxHeight: 40,
    minWidth: 40,
    minHeight: 40,
  },
});
