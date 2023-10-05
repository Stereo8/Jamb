import { IColumn } from "../stores/column";
import { ColumnData } from "../types/columnData";
import { Text, View, StyleSheet } from "react-native";

type Props = { column: IColumn };

export const Column = (props: Props) => {
  const openFieldEntryModal = () => {
    // TODO
  };

  const columnFields = Object.entries(props.column.columnData).map(
    // @ts-ignore
    ([field, value]) => (
      <Text
        key={field}
        style={styles.text}
        onPress={() => {
          openFieldEntryModal();
        }}
      >
        {`${field}: ${value ?? ""}`}
      </Text>
    )
  );
  return <View style={styles.column}>{columnFields}</View>;
};

const styles = StyleSheet.create({
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
