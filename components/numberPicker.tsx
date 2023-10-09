import { observer } from "mobx-react";
import { View, Text, StyleSheet } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { UIState } from "../stores/uiState";
import { JambSheet } from "../stores/jambSheet";
import { action } from "mobx";
import { Row } from "../types/columnData";
import * as Haptics from "expo-haptics";
import React from "react";

type Props = { uiState: UIState };

export const NumberPicker = observer((props: Props) => {
  const numbersToDisplay = calculateNumbers(props.uiState.selectedRow);
  const carousel = React.createRef<ICarouselInstance>();
  return (
    <View style={styles.carousel}>
      <Carousel
        ref={carousel}
        data={numbersToDisplay}
        vertical
        height={250}
        width={1000}
        mode={"parallax"}
        snapEnabled={true}
        modeConfig={{
          parallaxAdjacentItemScale: 0.35,
          parallaxScrollingScale: 1.3,
          parallaxScrollingOffset: 160,
        }}
        scrollAnimationDuration={2}
        onSnapToItem={(index) => {
          props.uiState.setNumberSelectedInPicker(numbersToDisplay[index]);
        }}
        onProgressChange={() =>
          triggerHaptics(carousel.current!.getCurrentIndex())
        }
        renderItem={(info) => (
          <View style={styles.cell}>
            <Text style={styles.text}>{info.item}</Text>
          </View>
        )}
        overscrollEnabled={true}
        loop={false}
      ></Carousel>
      <Text
        style={styles.setButton}
        onPress={action(async () => {
          props.uiState.setField();
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        })}
      >
        Set
      </Text>
    </View>
  );
});

let lastNumber = 0;

const triggerHaptics = async (index: number) => {
  if (lastNumber !== index) {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    lastNumber = index;
  }
};

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

const calculateNumbers = (field: Row) => {
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
    margin: 10,
    width: "70%",
    maxHeight: 400,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    fontSize: 96,
    textAlign: "center",
    textAlignVertical: "center",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setButton: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
