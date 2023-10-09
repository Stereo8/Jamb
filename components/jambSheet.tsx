import { JambSheet } from "../stores/jambSheet";
import { observer, inject } from "mobx-react";
import { Key, useEffect, useState } from "react";
import { Text, View, StyleSheet, Modal } from "react-native";
import { Column } from "./column";
import { RowLabels } from "./rowLabels";
import { NumberPicker } from "./numberPicker";
import { UIState } from "../stores/uiState";
import { ColumnType } from "../types/columns";
import { Row } from "../types/columnData";

type Props = { jambSheet: JambSheet; uiState: UIState };

export const JambSheetDisplay = observer((props: Props) => {
  const setFieldBeingEdited = (row: Row, column: ColumnType) => {
    props.uiState.setSelectedField(row, column);
  };

  return (
    <View style={styles.container}>
      <RowLabels></RowLabels>
      <Column
        column={props.jambSheet.columns["down"]}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "down")}
        uiState={props.uiState}
      ></Column>
      <Column
        column={props.jambSheet.columns["up"]}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "up")}
        uiState={props.uiState}
      ></Column>
      <Modal transparent visible={props.uiState.numberPickerOpen}>
        <View style={styles.modal}>
          <NumberPicker uiState={props.uiState}></NumberPicker>
        </View>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: { fontSize: 36 },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});
