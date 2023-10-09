export const ColumnIcons = {
  up: require("../assets/column-icons/up.png"),
  down: require("../assets/column-icons/down.png"),
  free: require("../assets/column-icons/free.png"),
  inside: require("../assets/column-icons/inside.png"),
  outside: require("../assets/column-icons/outside.png"),
  announce: "",
  hand: "",
  call: "",
  final: "",
  max: "",
};

export type ColumnIcon = keyof typeof ColumnIcons;
