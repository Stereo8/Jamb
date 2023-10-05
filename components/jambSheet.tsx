import { JambSheet } from "../stores/jambSheet";
import { observer, inject } from "mobx-react";
import { Key, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Column } from "./column";
import { RowLabels } from "./rowLabels";

type Props = { jambSheet: JambSheet };

export const JambSheetDisplay = observer((props: Props) => {
  return (
    <View style={styles.container}>
      <RowLabels></RowLabels>
      <Column column={props.jambSheet.downColumn}></Column>
      <Column column={props.jambSheet.upColumn}></Column>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
