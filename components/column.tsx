import { IColumn } from "../stores/column";
import { Row } from "../types/columnData";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { observer } from "mobx-react";
import { UIState } from "../stores/uiState";
import { ColumnIcon } from "../utils/images";
import { ColumnLabel } from "./columnLabel";

type Props = {
  column: IColumn;
  fieldSelected: (field: Row) => void;
  uiState: UIState;
  columnIcon: ColumnIcon;
};

export const Column = observer((props: Props) => {
  const openFieldEntryModal = (field: Row) => {
    if (props.column.playableFields.includes(field)) {
      props.fieldSelected(field);
    }
  };

  console.log(props.column.columnData);

  const digits = Object.entries(props.column.columnData)
    .slice(0, 6)
    .map(([field, value]) => {
      return (
        <Pressable
          key={field}
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
          key={field}
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
          key={field}
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
  return (
    <View style={styles.column}>
      <View style={styles.cell}>
        <ColumnLabel columnIcon={props.columnIcon}></ColumnLabel>
      </View>

      {digits}

      <View style={{ ...styles.cell, ...styles.sum }}>
        <Text>{props.column.digitsSum}</Text>
      </View>

      {minMax}

      <View style={{ ...styles.cell, ...styles.sum }}>
        <Text>{props.column.minMax}</Text>
      </View>

      {lower}

      <View style={{ ...styles.cell, ...styles.sum }}>
        <Text>{props.column.lower}</Text>
      </View>
    </View>
  );
});

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
    fontSize: 18,
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
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
    // backgroundColor: "#bbedbf",
  },
  highlighted: {},
  sum: { backgroundColor: "#ececec" },
  underlined: { borderBottomWidth: 2 },
});
