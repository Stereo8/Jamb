import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { getLatestAutosave } from "../utils/database";
import TimeAgo from "javascript-time-ago";
import sr from "javascript-time-ago/locale/sr-Latn";

TimeAgo.addDefaultLocale(sr);

export default function MainMenu() {
  const [latestAutosaveId, setLatestAutosaveId] = useState(0);
  const [timeDiffDisplay, setTimeDiffDisplay] = useState("");
  useFocusEffect(() => {
    getLatestAutosave()
      .then((autosave) => {
        setLatestAutosaveId(autosave.autosave_id);

        const timeAgo = new TimeAgo("sr");
        setTimeDiffDisplay(
          timeAgo.format(autosave.save_timestamp * 1000, { now: Date.now() })
        );
      })
      .catch((err) => console.warn("no autosave found"));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jamb</Text>
      <View style={styles.divider}></View>
      <View style={styles.menu}>
        <Link href="/singlePlayer" asChild>
          <Button title="Nova igra" />
        </Link>
        {latestAutosaveId ? (
          <Link href={`/singlePlayer?autoSaveId=${latestAutosaveId}`} asChild>
            <Button title={`Nastavi (${timeDiffDisplay})`} />
          </Link>
        ) : (
          <></>
        )}

        <Button title="Istorija" />
        <Button title="Pomoć" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  menu: {
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontSize: 96,
    marginTop: 96,
  },
  divider: {
    flexGrow: 1,
  },
});
