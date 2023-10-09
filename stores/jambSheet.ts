import { Row } from "../types/columnData";
import { Columns } from "../types/columns";
import { DownColumn, IColumn, UpColumn } from "./column";
import { makeAutoObservable, makeObservable, observable } from "mobx";
export class JambSheet {
  columns: Columns;

  constructor() {
    makeAutoObservable(this);
    this.columns = { up: new UpColumn(), down: new DownColumn() };
  }
}
