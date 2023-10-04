import { DownColumn, UpColumn } from "./column";
import { makeObservable, observable } from "mobx";
export class JambSheet {
  upColumn: UpColumn;
  downColumn: DownColumn;

  constructor() {
    makeObservable(this, {
      upColumn: observable,
      downColumn: observable,
    });
    this.upColumn = new UpColumn();
    this.downColumn = new DownColumn();
  }
}
