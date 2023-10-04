export interface ColumnData {
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

  getPlayableFields: () => string[];
  isPlayable: (field) => boolean;
}

class Column implements ColumnData {}
