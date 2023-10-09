import { Row } from "../types/columnData";
import { Columns } from "../types/columns";
import { DownColumn, FreeColumn, IColumn, UpColumn } from "./column";
import { makeAutoObservable, makeObservable, observable } from "mobx";
export class JambSheet {
  columns: Columns;

  constructor() {
    makeAutoObservable(this);
    this.columns = {
      up: new UpColumn(),
      down: new DownColumn(),
      free: new FreeColumn(),
      announce: new FreeColumn(),
      hand: new FreeColumn(),
      call: new FreeColumn(),
      inside: new FreeColumn(),
      outside: new FreeColumn(),
      final: new FreeColumn(),
    };
  }
}
