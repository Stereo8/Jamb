import { Text, View, StyleSheet, useColorScheme, Button } from "react-native";
import { DarkScheme, LightScheme } from "../utils/colors";
import { Canvas, useFrame, useLoader } from "@react-three/fiber/native";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useTexture } from "@react-three/drei/native";
import { DarkDiceIcons, LightDiceIcons } from "../utils/images";
import { THREE, TextureLoader } from "expo-three";

const TURN = 1.57079633;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const diceRotations = {
  1: [0, 3 * TURN, 0],
  5: [0, 0, 1 * TURN],
  2: [0, 1 * TURN, 0],
  3: [1 * TURN, 0, 0],
  4: [0, 1 * TURN, 3 * TURN],
  6: [2 * TURN, 0, 0],
};

const Die = forwardRef((props, ref) => {
  const mesh = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);

  const timerRef = useRef();

  const textures: THREE.Texture[] = useLoader(TextureLoader, DarkDiceIcons);

  const spring = useSpring({
    rotation: rotation,
    config: config.default,
  });

  useImperativeHandle(ref, () => ({
    rollDice(num) {
      timerRef.current = null;
      setRotation([getRandom(-5, 5), getRandom(-5, 5), getRandom(-5, 5)]);
      timerRef.current = setTimeout(
        () => setRotation(diceRotations[num]),
        getRandom(100, 250)
      );
    },
  }));

  return (
    <>
      <animated.mesh
        {...props}
        ref={mesh}
        scale={0.5}
        rotation={spring.rotation}
      >
        <boxGeometry attach={"geometry"} args={[1, 1, 1]} />
        {textures.map((t, idx) => (
          <meshLambertMaterial
            key={t.id}
            attach={`material-${idx}`}
            map={t}
          ></meshLambertMaterial>
        ))}
      </animated.mesh>
    </>
  );
});

export default function threeDTesting() {
  const theme = useColorScheme() === "dark" ? DarkScheme : LightScheme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "flex-start",
      padding: 8,
      backgroundColor: theme.background,
    },
    text: {
      fontSize: 36,
      color: theme.text,
    },
  });

  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6]);
  const diceRefs = dice.map(() => useRef());

  const rollDice = () => {
    setDice(
      dice.map(() => {
        return getRandom(1, 6);
      })
    );
    diceRefs.forEach((d, index) => d.current.rollDice(dice[index]));
  };

  console.log(dice);

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>3D Testing</Text>
          <Button title="Roll" onPress={() => rollDice()}></Button>
        </View>
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.tableLines,
            height: "90%",
            width: "90%",
          }}
        >
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Die num={dice[3]} ref={diceRefs[3]} position={[-0.7, 0, 0]} />
            <Die num={dice[4]} ref={diceRefs[4]} position={[0, 0, 0]} />
            <Die num={dice[5]} ref={diceRefs[5]} position={[+0.7, 0, 0]} />

            <Die num={dice[0]} ref={diceRefs[0]} position={[-0.7, 0.7, 0]} />
            <Die num={dice[1]} ref={diceRefs[1]} position={[0, 0.7, 0]} />
            <Die num={dice[2]} ref={diceRefs[2]} position={[+0.7, 0.7, 0]} />
          </Canvas>
        </View>
      </View>
    </>
  );
}
