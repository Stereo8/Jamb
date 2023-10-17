export const LightColumnIcons = {
  up: require("../assets/column-icons/dark/up.png"),
  down: require("../assets/column-icons/dark/down.png"),
  free: require("../assets/column-icons/dark/free.png"),
  inside: require("../assets/column-icons/dark/inside.png"),
  outside: require("../assets/column-icons/dark/outside.png"),
  announce: "",
  hand: "",
  call: "",
  final: "",
  max: "",
};

export const DarkColumnIcons = {
  up: require("../assets/column-icons/light/up.png"),
  down: require("../assets/column-icons/light/down.png"),
  free: require("../assets/column-icons/light/free.png"),
  inside: require("../assets/column-icons/light/inside.png"),
  outside: require("../assets/column-icons/light/outside.png"),
  announce: "",
  hand: "",
  call: "",
  final: "",
  max: "",
};

export const DarkDiceIcons = [
  require("../assets/dice/dark/1.png"),
  require("../assets/dice/dark/2.png"),
  require("../assets/dice/dark/3.png"),
  require("../assets/dice/dark/4.png"),
  require("../assets/dice/dark/5.png"),
  require("../assets/dice/dark/6.png"),
];

export const LightDiceIcons = [
  require("../assets/dice/light/1.png"),
  require("../assets/dice/light/2.png"),
  require("../assets/dice/light/3.png"),
  require("../assets/dice/light/4.png"),
  require("../assets/dice/light/5.png"),
  require("../assets/dice/light/6.png"),
];

export type ColumnIcon = keyof typeof LightColumnIcons;
