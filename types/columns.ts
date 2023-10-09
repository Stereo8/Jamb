import { IColumn } from "../stores/column";

export type Columns = {
  up: IColumn;
  down: IColumn;
};

export type ColumnType = keyof Columns;
