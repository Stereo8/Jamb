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
  get digitsSum(): number;
  get minMax(): number;
  get lower(): number;
}

export class DownColumn implements IColumn {
  columnData: ColumnData;

  constructor(columnData: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    if (columnData === undefined) {
      // @ts-ignore
      this.columnData = {};

      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      this.columnData = columnData;
    }
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

  get digitsSum() {
    return ["1", "2", "3", "4", "5", "6"].reduce(
      (acc, d) => acc + this.columnData[d],
      0
    );
  }
  get lower(): number {
    return (
      (this.columnData.kenta ?? 0) +
      (this.columnData.triling ?? 0) +
      (this.columnData.ful ?? 0) +
      (this.columnData.poker ?? 0) +
      (this.columnData.yamb ?? 0)
    );
  }
  get minMax(): number {
    if (
      this.columnData[1] === null ||
      this.columnData.min === null ||
      this.columnData.max === null
    ) {
      return 0;
    }
    return (this.columnData.max - this.columnData.min) * this.columnData[1];
  }
}

export class UpColumn implements IColumn {
  columnData: ColumnData;

  constructor(columnData: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    if (columnData === undefined) {
      // @ts-ignore
      this.columnData = {};
      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      this.columnData = columnData;
    }
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

  get digitsSum() {
    return ["1", "2", "3", "4", "5", "6"].reduce(
      (acc, d) => acc + this.columnData[d],
      0
    );
  }
  get lower(): number {
    return (
      (this.columnData.kenta ?? 0) +
      (this.columnData.triling ?? 0) +
      (this.columnData.ful ?? 0) +
      (this.columnData.poker ?? 0) +
      (this.columnData.yamb ?? 0)
    );
  }
  get minMax(): number {
    if (
      this.columnData[1] === null ||
      this.columnData.min === null ||
      this.columnData.max === null
    ) {
      return 0;
    }
    return (this.columnData.max - this.columnData.min) * this.columnData[1];
  }
}

export class FreeColumn implements IColumn {
  columnData: ColumnData;

  constructor(columnData: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    if (columnData === undefined) {
      // @ts-ignore
      this.columnData = {};
      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      this.columnData = columnData;
    }
  }

  get playableFields(): string[] {
    return Object.keys(this.columnData);
  }
  setField(field: Row, value: number) {
    // TODO: Do row checks
    this.columnData[field] = value;
  }

  get digitsSum() {
    return ["1", "2", "3", "4", "5", "6"].reduce(
      (acc, d) => acc + this.columnData[d],
      0
    );
  }
  get lower(): number {
    return (
      (this.columnData.kenta ?? 0) +
      (this.columnData.triling ?? 0) +
      (this.columnData.ful ?? 0) +
      (this.columnData.poker ?? 0) +
      (this.columnData.yamb ?? 0)
    );
  }
  get minMax(): number {
    if (
      this.columnData[1] === null ||
      this.columnData.min === null ||
      this.columnData.max === null
    ) {
      return 0;
    }
    return (this.columnData.max - this.columnData.min) * this.columnData[1];
  }
}
