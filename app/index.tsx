import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { getLatestAutosave } from "../utils/database";
import TimeAgo from "javascript-time-ago";
import sr from "javascript-time-ago/locale/sr-Latn";
import { DarkScheme, LightScheme } from "../utils/colors";

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

  const theme = useColorScheme() === "dark" ? DarkScheme : LightScheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
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
      color: theme.text,
    },
    divider: {
      flexGrow: 1,
    },
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

        <Link href="/threeDTesting" asChild>
          <Button title="3D Testing" />
        </Link>
      </View>
    </View>
  );
}
