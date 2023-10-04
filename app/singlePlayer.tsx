import { useState } from "react";
import { JambSheet } from "../stores/jambSheet";
import { JambSheetDisplay } from "../components/jambSheet";
import { Text, View, StyleSheet } from "react-native";

const SinglePlayerInGame = () => {
  const [jambSheet] = useState(() => new JambSheet());

  return <JambSheetDisplay jambSheet={jambSheet}></JambSheetDisplay>;
};

export default SinglePlayerInGame;
