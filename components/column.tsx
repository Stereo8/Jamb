import { IColumn } from "../stores/column";
import { Row } from "../types/columnData";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import { observer } from "mobx-react";
import { UIState } from "../stores/uiState";
import { ColumnIcon } from "../utils/images";
import { ColumnLabel } from "./columnLabel";
import uuid from "react-uuid";
import { LightScheme, DarkScheme } from "../utils/colors";

type Props = {
  column: IColumn;
  fieldSelected: (field: Row) => void;
  uiState: UIState;
  columnIcon: ColumnIcon;
  highlightPlayable?: boolean;
};

export const Column = observer((props: Props) => {
  const openFieldEntryModal = (field: Row) => {
    if (props.column.playableFields.includes(field)) {
      props.fieldSelected(field);
    }
  };

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
      fontSize: 18,
    },
    cell: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderColor: theme.tableLines,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderStyle: "solid",
      maxWidth: 40,
      maxHeight: 40,
      minWidth: 40,
      minHeight: 40,
    },
    playable: {
      backgroundColor: theme.highlightedField,
    },
    highlighted: {},
    sum: { backgroundColor: theme.sumField },
    underlined: { borderBottomWidth: 2 },
  });

  const digits = Object.entries(props.column.columnData)
    .slice(0, 6)
    .map(([field, value]) => {
      return (
        <Pressable
          key={uuid()}
          onPress={() => {
            openFieldEntryModal(field as Row);
          }}
        >
          <View
            style={{
              ...styles.cell,
              ...(props.column.playableFields.includes(field) &&
                styles.playable),
              ...(props.column.playableFields.includes(field) &&
                styles.highlighted),
              ...(["6", "min", "yamb"].includes(field) && styles.underlined),
            }}
          >
            <Text style={styles.text}>{`${value ?? ""}`}</Text>
          </View>
        </Pressable>
      );
    });

  const minMax = Object.entries(props.column.columnData)
    .slice(6, 8)
    .map(([field, value]) => {
      return (
        <Pressable
          key={uuid()}
          onPress={() => {
            openFieldEntryModal(field as Row);
          }}
        >
          <View
            style={{
              ...styles.cell,
              ...(props.column.playableFields.includes(field) &&
                styles.playable),
              ...(props.column.playableFields.includes(field) &&
                styles.highlighted),
              ...(["6", "min", "yamb"].includes(field) && styles.underlined),
            }}
          >
            <Text style={styles.text}>{`${value ?? ""}`}</Text>
          </View>
        </Pressable>
      );
    });

  const lower = Object.entries(props.column.columnData)
    .slice(8, 16)
    .map(([field, value]) => {
      return (
        <Pressable
          key={uuid()}
          onPress={() => {
            openFieldEntryModal(field as Row);
          }}
        >
          <View
            style={{
              ...styles.cell,
              ...(props.column.playableFields.includes(field) &&
                props.highlightPlayable &&
                styles.playable),
              ...(props.column.playableFields.includes(field) &&
                styles.highlighted),
              ...(["6", "min", "yamb"].includes(field) && styles.underlined),
            }}
          >
            <Text style={styles.text}>{`${value ?? ""}`}</Text>
          </View>
        </Pressable>
      );
    });

  return (
    <View style={styles.column}>
      <View style={styles.cell}>
        <ColumnLabel columnIcon={props.columnIcon}></ColumnLabel>
      </View>

      {digits}

      {props.uiState.showSums && (
        <View style={{ ...styles.cell, ...styles.sum }}>
          <Text style={styles.text}>{props.column.digitsSum}</Text>
        </View>
      )}

      {minMax}

      {props.uiState.showSums && (
        <View style={{ ...styles.cell, ...styles.sum }}>
          <Text style={styles.text}>{props.column.minMax}</Text>
        </View>
      )}

      {lower}

      {props.uiState.showSums && (
        <View style={{ ...styles.cell, ...styles.sum }}>
          <Text style={styles.text}>{props.column.lower}</Text>
        </View>
      )}
    </View>
  );
});
