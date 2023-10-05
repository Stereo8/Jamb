import { Text, View, StyleSheet } from "react-native";
import { COLUMN_ORDER } from "../utils/constants";

export const RowLabels = () => {
  return (
    <View style={styles.column}>
      {COLUMN_ORDER.map((label) => (
        <View key={label} style={styles.cell}>
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
  },
  text: {
    color: "#000",
    fontSize: 18,
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderStyle: "solid",
    maxWidth: 40,
    maxHeight: 40,
    minWidth: 40,
    minHeight: 40,
  },
});
