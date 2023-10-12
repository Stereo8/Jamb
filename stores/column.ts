import { action, computed, makeObservable, observable } from "mobx";
import {
  COLUMN_ORDER,
  UP_ORDER,
  DOWN_ORDER,
  OUTSIDE_DOWN_ORDER,
  OUTSIDE_UP_ORDER,
  INSIDE_DOWN_ORDER,
  INSIDE_UP_ORDER,
} from "../utils/constants";
import { ColumnData, Row } from "../types/columnData";

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

  constructor(columnData?: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    // @ts-ignore
    this.columnData = {};
    if (columnData === undefined) {
      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      Object.entries(columnData).forEach(([key, value]) => {
        this.columnData[key] = value;
      });
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

  constructor(columnData?: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    // @ts-ignore
    this.columnData = {};
    if (columnData === undefined) {
      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      Object.entries(columnData).forEach(([key, value]) => {
        this.columnData[key] = value;
      });
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

  constructor(columnData?: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    // @ts-ignore
    this.columnData = {};
    if (columnData === undefined) {
      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      Object.entries(columnData).forEach(([key, value]) => {
        this.columnData[key] = value;
      });
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

export class InsideColumn implements IColumn {
  columnData: ColumnData;

  constructor(columnData?: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    // @ts-ignore
    this.columnData = {};
    if (columnData === undefined) {
      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      Object.entries(columnData).forEach(([key, value]) => {
        this.columnData[key] = value;
      });
    }
  }

  get playableFields(): string[] {
    const pf: string[] = [];
    const findFirstEmptyField = (field: string): boolean | undefined => {
      if (this.columnData[field] === null) {
        pf.push(field);
        return false;
      } else return true;
    };
    INSIDE_DOWN_ORDER.every(findFirstEmptyField);
    INSIDE_UP_ORDER.every(findFirstEmptyField);
    return pf;
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

export class OutsideColumn implements IColumn {
  columnData: ColumnData;

  constructor(columnData?: ColumnData | undefined) {
    makeObservable(this, {
      columnData: observable,
      playableFields: computed,
      setField: action,
      digitsSum: computed,
      minMax: computed,
      lower: computed,
    });
    // @ts-ignore
    this.columnData = {};
    if (columnData === undefined) {
      COLUMN_ORDER.forEach((field) => {
        this.columnData[field] = null;
      });
    } else {
      Object.entries(columnData).forEach(([key, value]) => {
        this.columnData[key] = value;
      });
    }
  }

  get playableFields(): string[] {
    const pf: string[] = [];
    const findFirstEmptyField = (field: string): boolean | undefined => {
      if (this.columnData[field] === null) {
        pf.push(field);
        return false;
      } else return true;
    };
    OUTSIDE_DOWN_ORDER.every(findFirstEmptyField);
    OUTSIDE_UP_ORDER.every(findFirstEmptyField);
    return pf;
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
