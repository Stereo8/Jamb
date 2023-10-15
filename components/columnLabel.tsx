import { ColumnType } from "../types/columns";
import { Image } from "expo-image";
import { LightColumnIcons, DarkColumnIcons } from "../utils/images";
import { Text, useColorScheme } from "react-native";
import { DarkScheme, LightScheme } from "../utils/colors";

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
  const theme = useColorScheme() === "dark" ? DarkScheme : LightScheme;
  const images =
    useColorScheme() === "dark" ? DarkColumnIcons : LightColumnIcons;
  return icons.includes(props.columnIcon) ? (
    <Image
      style={{ width: "100%", height: "100%" }}
      contentFit="contain"
      source={images[props.columnIcon]}
    ></Image>
  ) : (
    <Text style={{ fontSize: 24, fontWeight: "bold", color: theme.text }}>
      {textBindings[props.columnIcon]}
    </Text>
  );
};
