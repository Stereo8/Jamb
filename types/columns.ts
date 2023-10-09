import { IColumn } from "../stores/column";

export type Columns = {
  up: IColumn;
  down: IColumn;
  free: IColumn;
  announce: IColumn;
  hand: IColumn;
  call: IColumn;
  inside: IColumn;
  outside: IColumn;
  final: IColumn;
  max?: IColumn;
};

export type ColumnType = keyof Columns;
