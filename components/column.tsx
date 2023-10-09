import { IColumn } from "../stores/column";
import { ColumnData, Row } from "../types/columnData";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { observer } from "mobx-react";
import { UIState } from "../stores/uiState";

type Props = {
  column: IColumn;
  fieldSelected: (field: Row) => void;
  uiState: UIState;
};

export const Column = observer((props: Props) => {
  const openFieldEntryModal = (field: Row) => {
    props.fieldSelected(field);
  };

  const columnFields = Object.entries(props.column.columnData).map(
    ([field, value]) => {
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
            }}
          >
            <Text style={styles.text}>{`${value ?? ""}`}</Text>
          </View>
        </Pressable>
      );
    }
  );
  return <View style={styles.column}>{columnFields}</View>;
});

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
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
  playable: {
    backgroundColor: "#bbedbf",
  },
  highlighted: {},
});
