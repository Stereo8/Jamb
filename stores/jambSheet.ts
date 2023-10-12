import { Columns } from "../types/columns";
import {
  DownColumn,
  FreeColumn,
  InsideColumn,
  OutsideColumn,
  UpColumn,
} from "./column";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
export class JambSheet {
  columns: Columns;

  constructor(columns?: Columns | undefined) {
    makeObservable(this, { columns: observable, setColumns: action });
    this.columns = {
      up: new UpColumn(columns?.up.columnData),
      down: new DownColumn(columns?.down.columnData),
      free: new FreeColumn(columns?.free.columnData),
      announce: new FreeColumn(columns?.announce.columnData),
      hand: new FreeColumn(columns?.hand.columnData),
      call: new FreeColumn(columns?.call.columnData),
      inside: new InsideColumn(columns?.inside.columnData),
      outside: new OutsideColumn(columns?.outside.columnData),
      final: new FreeColumn(columns?.final.columnData),
    };
  }
  toJSON(): string {
    return JSON.stringify(this.columns);
  }

  static fromJson(json: string): JambSheet {
    const columns = JSON.parse(json);
    return new JambSheet(columns);
  }

  setColumns(columns: Columns) {
    this.columns = columns;
  }
}
