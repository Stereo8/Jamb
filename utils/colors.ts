export type ColorScheme = {
  background: string;
  text: string;
  tableLines: string;
  highlightedField: string;
  sumField: string;
};

export const LightScheme: ColorScheme = {
  background: "#fff",
  text: "#000",
  tableLines: "#000",
  highlightedField: "#bbedbf",
  sumField: "#ececec",
};

export const DarkScheme: ColorScheme = {
  background: "#1a1a1a",
  text: "#a5a5a5",
  tableLines: "#5e5e5e",
  highlightedField: "#4d6e4e",
  sumField: "#404040",
};
