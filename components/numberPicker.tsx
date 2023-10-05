import { View, Text, StyleSheet } from "react-native";

export const NumberPicker = (field: string) => {
  const numbersToDisplay = calculateNumbers(field);
};

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

const calculateNumbers = (field: string) => {
  const numberOfDice = [1, 2, 3, 4, 5, 6];
  if (["1", "2", "3", "4", "5", "6"].includes(field)) {
    return numberOfDice.map((d) => d * Number(field));
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
        numbers.push(
          ...range(1, 6)
            .map((d) => d * 4 + 40)
            .reverse(),
          0
        );
        break;
      case "yamb":
        numbers.push(
          ...range(1, 6)
            .map((d) => d * 5 + 50)
            .reverse(),
          0
        );
    }
    return numbers;
  }
};
