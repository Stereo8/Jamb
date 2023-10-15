import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import uuid from "react-uuid";
import { DarkScheme, LightScheme } from "../utils/colors";
import { UIState } from "../stores/uiState";
import { observer } from "mobx-react";

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

type Props = { uiState: UIState };

export const RowLabels = observer((props: Props) => {
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
      <Pressable
        onPress={() => {
          props.uiState.setShowSums(!props.uiState.showSums);
        }}
      >
        <View style={styles.cell}>
          <Text style={styles.text}></Text>
        </View>
      </Pressable>

      {labels
        .filter((label) => {
          if (props.uiState.showSums) {
            return true;
          } else {
            return label !== "Σ";
          }
        })
        .map((label) => (
          <View key={uuid()} style={styles.cell}>
            <Text style={styles.text}>{label}</Text>
          </View>
        ))}
    </View>
  );
});
