import { useEffect, useState } from "react";
import { JambSheet } from "../stores/jambSheet";
import { JambSheetDisplay } from "../components/jambSheet";
import { Text, View, StyleSheet, Button } from "react-native";
import { UIState } from "../stores/uiState";
import { NumberPicker } from "../components/numberPicker";
import {
  Autosave,
  autoSaveJambSheet,
  getLatestAutosave,
} from "../utils/database";
import { useLocalSearchParams } from "expo-router/src/hooks";
import { observer } from "mobx-react";
import { router } from "expo-router";

const SinglePlayerInGame = observer(() => {
  const [jambSheet] = useState(new JambSheet());
  const [uiState] = useState(() => new UIState(jambSheet));

  const query = useLocalSearchParams();
  useEffect(() => {
    if (query?.autoSaveId) {
      getLatestAutosave()
        .then((autosave: Autosave) => {
          jambSheet.setColumns(JambSheet.fromJson(autosave.save_json).columns);
        })
        .catch((err) => {
          console.error("Autosave passed to SinglePlayerInGame not found.");
          router.back();
        });
    }
    return () => {
      autoSaveJambSheet(jambSheet);
    };
  }, []);

  const breakpoint = () => {
    console.log(this);
    debugger;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <JambSheetDisplay
        jambSheet={jambSheet}
        uiState={uiState}
      ></JambSheetDisplay>
      <Button
        onPress={() => {
          breakpoint();
        }}
        title="Breakpoint"
      ></Button>
    </View>
  );
});
export default SinglePlayerInGame;
