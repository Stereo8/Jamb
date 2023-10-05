import { JambSheet } from "../stores/jambSheet";
import { observer, inject } from "mobx-react";
import { Key, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Column } from "./column";
import { RowLabels } from "./rowLabels";
import { NumberPicker } from "./numberPicker";

type Props = { jambSheet: JambSheet };

export const JambSheetDisplay = observer((props: Props) => {
  const [fieldBeingEdited, setFieldBeingEdited] = useState("1");
  return (
    <View style={styles.container}>
      <RowLabels></RowLabels>
      <Column
        column={props.jambSheet.downColumn}
        fieldEdited={(field: string) => setFieldBeingEdited(field)}
      ></Column>
      <Column
        column={props.jambSheet.upColumn}
        fieldEdited={(field: string) => setFieldBeingEdited(field)}
      ></Column>
      <NumberPicker field={fieldBeingEdited}></NumberPicker>
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
