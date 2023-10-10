import { Columns } from "../types/columns";
import {
  DownColumn,
  FreeColumn,
  InsideColumn,
  OutsideColumn,
  UpColumn,
} from "./column";
import { makeAutoObservable } from "mobx";
export class JambSheet {
  columns: Columns;

  constructor() {
    makeAutoObservable(this);
    this.columns = {
      up: new UpColumn(undefined),
      down: new DownColumn(undefined),
      free: new FreeColumn(undefined),
      announce: new FreeColumn(undefined),
      hand: new FreeColumn(undefined),
      call: new FreeColumn(undefined),
      inside: new InsideColumn(undefined),
      outside: new OutsideColumn(undefined),
      final: new FreeColumn(undefined),
    };
  }
}
