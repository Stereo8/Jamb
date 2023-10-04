import { action, computed, makeObservable, observable } from "mobx";
import { COLUMN_ORDER } from "../utils/constants";

export interface IColumn {
  get playableFields(): string[];

  columnData: {
    1: number | null;
    2: number | null;
    3: number | null;
    4: number | null;
    5: number | null;
    6: number | null;
    max: number | null;
    min: number | null;
    kenta: number | null;
    triling: number | null;
    ful: number | null;
    poker: number | null;
    yamb: number | null;
  };
  UP_ORDER?: string[];
  DOWN_ORDER?: string[];
}

export class DownColumn implements IColumn {
  columnData: {
    1: number | null;
    2: number | null;
    3: number | null;
    4: number | null;
    5: number | null;
    6: number | null;
    max: number | null;
    min: number | null;
    kenta: number | null;
    triling: number | null;
    ful: number | null;
    poker: number | null;
    yamb: number | null;
  };
  readonly DOWN_ORDER: string[] = [
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
    for (const field of this.DOWN_ORDER) {
      if (this.columnData[field] === null) return [field];
    }
    return [];
  }
  setField(field: string, value: number) {
    // TODO: Do row checks
    this.columnData[field] = value;
  }
}

export class UpColumn implements IColumn {
  columnData: {
    1: number | null;
    2: number | null;
    3: number | null;
    4: number | null;
    5: number | null;
    6: number | null;
    max: number | null;
    min: number | null;
    kenta: number | null;
    triling: number | null;
    ful: number | null;
    poker: number | null;
    yamb: number | null;
  };
  readonly UP_ORDER: string[] = [
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
    for (const field of this.UP_ORDER) {
      if (this.columnData[field] === null) return [field];
    }
    return [];
  }
  setField(field: string, value: number) {
    // TODO: Do row checks
    this.columnData[field] = value;
  }
}
