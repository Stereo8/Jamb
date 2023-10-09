import { useState } from "react";
import { JambSheet } from "../stores/jambSheet";
import { JambSheetDisplay } from "../components/jambSheet";
import { Text, View, StyleSheet } from "react-native";
import { UIState } from "../stores/uiState";

const SinglePlayerInGame = () => {
  const [jambSheet] = useState(() => new JambSheet());
  const [uiState] = useState(() => new UIState(jambSheet));

  return (
    <JambSheetDisplay
      jambSheet={jambSheet}
      uiState={uiState}
    ></JambSheetDisplay>
  );
};

export default SinglePlayerInGame;
