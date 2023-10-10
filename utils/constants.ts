export const COLUMN_ORDER = [
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

export const DOWN_ORDER = COLUMN_ORDER;
export const UP_ORDER = COLUMN_ORDER.slice().reverse();

export const INSIDE_UP_ORDER = UP_ORDER.slice(6, 13);
export const INSIDE_DOWN_ORDER = DOWN_ORDER.slice(7, 13);

export const OUTSIDE_DOWN_ORDER = DOWN_ORDER.slice(0, 7);
export const OUTSIDE_UP_ORDER = UP_ORDER.slice();
