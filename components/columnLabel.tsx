import { ColumnType } from "../types/columns";
import { Image } from "expo-image";
import { ColumnIcons } from "../utils/images";
import { Text } from "react-native";

type Props = { columnIcon: ColumnType };

const icons = ["up", "down", "free", "inside", "outside"];
const textBindings = {
  announce: "N",
  hand: "R",
  call: "D",
  final: "O",
  max: "M",
};

export const ColumnLabel = (props: Props) => {
  return icons.includes(props.columnIcon) ? (
    <Image
      style={{ width: "100%", height: "100%" }}
      contentFit="contain"
      source={ColumnIcons[props.columnIcon]}
    ></Image>
  ) : (
    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
      {textBindings[props.columnIcon]}
    </Text>
  );
};
