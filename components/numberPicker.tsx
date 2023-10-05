import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

type Props = { field: string };

export const NumberPicker = (props: Props) => {
  const numbersToDisplay = calculateNumbers(props.field);

  return (
    <View style={styles.carousel}>
      <Carousel
        data={numbersToDisplay}
        vertical
        height={150}
        width={75}
        mode={"parallax"}
        snapEnabled={true}
        modeConfig={{
          parallaxAdjacentItemScale: 0.45,
          parallaxScrollingScale: 1.0,
          parallaxScrollingOffset: 95,
        }}
        scrollAnimationDuration={2}
        renderItem={(info) => (
          <View style={styles.cell}>
            <Text style={styles.text}>{info.item}</Text>
          </View>
        )}
      ></Carousel>
    </View>
  );
};

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

const calculateNumbers = (field: string) => {
  if (["1", "2", "3", "4", "5", "6"].includes(field)) {
    return range(1, 5).map((d) => d * Number(field));
  } else {
    const numbers: number[] = [];
    switch (field) {
      case "max":
        numbers.push(...range(5, 30).reverse());
        break;
      case "min":
        numbers.push(...range(5, 30));
        break;
      case "kenta":
        numbers.push(66, 56, 46, 0);
        break;
      case "triling":
        numbers.push(
          ...range(1, 6)
            .map((d) => d * 3 + 20)
            .reverse(),
          0
        );
        break;
      case "ful":
        numbers.push(
          ...[
            ...new Set(
              range(1, 6).flatMap((triIste) =>
                range(1, 6)
                  .filter((i) => i !== triIste)
                  .map((dveIste) => triIste * 3 + dveIste * 2 + 30)
              )
            ),
          ].sort((a, b) => b - a)
        );
        break;
      case "poker":
        numbers.push(...range(1, 6).map((d) => d * 4 + 40), 0);
        break;
      case "yamb":
        numbers.push(...range(1, 6).map((d) => d * 5 + 50), 0);
    }
    return numbers;
  }
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 10,
  },
  arrows: {
    fontSize: 48,
  },
  text: {
    fontSize: 64,
    textAlign: "center",
    textAlignVertical: "center",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
