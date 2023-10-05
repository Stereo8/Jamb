import { IColumn } from "../stores/column";
import { ColumnData } from "../types/columnData";
import { Text, View, StyleSheet } from "react-native";
import { observer } from "mobx-react";

type Props = { column: IColumn };

export const Column = observer((props: Props) => {
  const openFieldEntryModal = (field: string) => {
    props.column.setField(field, 38);
  };

  const columnFields = Object.entries(props.column.columnData).map(
    ([field, value]) => {
      return (
        <View
          key={field}
          style={{
            ...styles.cell,
            ...(props.column.playableFields.includes(field) &&
              styles.highlighted),
          }}
        >
          <Text
            style={styles.text}
            onPress={() => {
              openFieldEntryModal(field);
            }}
          >
            {`${value ?? ""}`}
          </Text>
        </View>
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
  highlighted: {
    backgroundColor: "#bbedbf",
  },
});
