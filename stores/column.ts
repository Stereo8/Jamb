import { action, computed, makeObservable, observable } from "mobx";
import { COLUMN_ORDER } from "../utils/constants";
import { ColumnData, Row } from "../types/columnData";

const DOWN_ORDER: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "max",
  "min",
  "kenta",
  "triling",
  "ful",
  "poker",
  "yamb",
];

const UP_ORDER: string[] = [
  "yamb",
  "poker",
  "ful",
  "triling",
  "kenta",
  "min",
  "max",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
];

export interface IColumn {
  get playableFields(): string[];
  setField(field: Row, value: number): void;
  columnData: ColumnData;
}

export class DownColumn implements IColumn {
  columnData: ColumnData;

  constructor() {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
    });

    // @ts-ignore
    this.columnData = {};

    COLUMN_ORDER.forEach((field) => {
      this.columnData[field] = null;
    });
  }

  get playableFields(): string[] {
    for (const field of DOWN_ORDER) {
      if (this.columnData[field] === null) return [field];
    }
    return [];
  }
  setField(field: Row, value: number) {
    // TODO: Do row checks
    this.columnData[field] = value;
  }
}

export class UpColumn implements IColumn {
  columnData: ColumnData;

  constructor() {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
    });

    // @ts-ignore
    this.columnData = {};
    COLUMN_ORDER.forEach((field) => {
      this.columnData[field] = null;
    });
  }

  get playableFields(): string[] {
    for (const field of UP_ORDER) {
      if (this.columnData[field] === null) return [field];
    }
    return [];
  }
  setField(field: Row, value: number) {
    // TODO: Do row checks
    this.columnData[field] = value;
  }
}

export class FreeColumn implements IColumn {
  columnData: ColumnData;

  constructor() {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
    });

    // @ts-ignore
    this.columnData = {};
    COLUMN_ORDER.forEach((field) => {
      this.columnData[field] = null;
    });
  }

  get playableFields(): string[] {
    return Object.keys(this.columnData);
  }
  setField(field: Row, value: number) {
    // TODO: Do row checks
    this.columnData[field] = value;
  }
}
