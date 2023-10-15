import { Text, View, StyleSheet, useColorScheme } from "react-native";
import uuid from "react-uuid";
import { DarkScheme, LightScheme } from "../utils/colors";

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
  const theme = useColorScheme() === "dark" ? DarkScheme : LightScheme;
  const styles = StyleSheet.create({
    column: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      minWidth: 40,
      maxWidth: 40,
    },
    text: {
      color: theme.text,
      fontSize: 14,
    },
    cell: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderColor: theme.tableLines,
      backgroundColor: theme.background,
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
