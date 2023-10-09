import { makeAutoObservable } from "mobx";
import { JambSheet } from "./jambSheet";
import { Row } from "../types/columnData";
import { IColumn } from "./column";
import { ColumnType } from "../types/columns";

export class UIState {
  numberSelectedInPicker: number;
  jambSheet: JambSheet;
  selectedRow: Row;
  selectedColumn: ColumnType;
  numberPickerOpen: boolean;

  setSelectedField(row: Row, column: ColumnType) {
    this.selectedRow = row;
    this.selectedColumn = column;
    this.numberPickerOpen = true;
  }

  setField() {
    this.jambSheet.columns[this.selectedColumn].setField(
      this.selectedRow,
      this.numberSelectedInPicker
    );
    this.numberPickerOpen = false;
  }

  closeNumberPicker() {
    this.numberPickerOpen = false;
  }

  setNumberSelectedInPicker(i: number) {
    this.numberSelectedInPicker = i;
  }

  constructor(jambSheet: JambSheet) {
    makeAutoObservable(this);
    this.numberSelectedInPicker = 0;
    this.jambSheet = jambSheet;
    this.numberPickerOpen = false;
  }
}
