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
        column={props.jambSheet.columns.down}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "down")}
        uiState={props.uiState}
        columnIcon="down"
      ></Column>
      <Column
        column={props.jambSheet.columns.free}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "free")}
        uiState={props.uiState}
        columnIcon="free"
      ></Column>
      <Column
        column={props.jambSheet.columns.up}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "up")}
        uiState={props.uiState}
        columnIcon="up"
      ></Column>
      <Column
        column={props.jambSheet.columns.announce}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "announce")}
        uiState={props.uiState}
        columnIcon="announce"
      ></Column>
      <Column
        column={props.jambSheet.columns.hand}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "hand")}
        uiState={props.uiState}
        columnIcon="hand"
      ></Column>
      <Column
        column={props.jambSheet.columns.call}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "call")}
        uiState={props.uiState}
        columnIcon="call"
      ></Column>
      <Column
        column={props.jambSheet.columns.inside}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "inside")}
        uiState={props.uiState}
        columnIcon="inside"
      ></Column>
      <Column
        column={props.jambSheet.columns.outside}
        fieldSelected={(field: Row) => setFieldBeingEdited(field, "outside")}
        uiState={props.uiState}
        columnIcon="outside"
      ></Column>
      {false && (
        <Column
          column={props.jambSheet.columns.final}
          fieldSelected={(field: Row) => setFieldBeingEdited(field, "final")}
          uiState={props.uiState}
          columnIcon="final"
        ></Column>
      )}
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
