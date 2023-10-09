import { useState } from "react";
import { JambSheet } from "../stores/jambSheet";
import { JambSheetDisplay } from "../components/jambSheet";
import { Text, View, StyleSheet } from "react-native";
import { UIState } from "../stores/uiState";
import { NumberPicker } from "../components/numberPicker";

const SinglePlayerInGame = () => {
  const [jambSheet] = useState(() => new JambSheet());
  const [uiState] = useState(() => new UIState(jambSheet));

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <JambSheetDisplay
        jambSheet={jambSheet}
        uiState={uiState}
      ></JambSheetDisplay>
    </View>
  );
};
export default SinglePlayerInGame;
