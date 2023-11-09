import { useSpring, config, animated } from "@react-spring/three";
import { TextureLoader } from "expo-three";
import { observer } from "mobx-react";
import { forwardRef, useRef, useState, useImperativeHandle } from "react";
import { Button, View, useColorScheme } from "react-native";
import { DarkDiceIcons } from "../utils/images";
import { Canvas, useLoader } from "@react-three/fiber/native";
import { DarkScheme, LightScheme } from "../utils/colors";

const Die = forwardRef((props, ref) => {
  const mesh = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);

  const timerRef = useRef<NodeJS.Timeout | null>();

  const textures = useLoader(TextureLoader, DarkDiceIcons);

  const spring = useSpring({
    rotation: rotation,
    config: config.default,
  });

  useImperativeHandle(ref, () => ({
    rollDice(num) {
      console.log(num);
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
        scale={1.5}
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

export const DiceRoller = observer(() => {
  const theme = useColorScheme() === "dark" ? DarkScheme : LightScheme;

  const [dice, setDice] = useState([1, 1, 1, 1, 1, 1]);
  const diceRefs = dice.map(() => useRef());

  const rollDice = () => {
    const newValues = dice.map(() => {
      return getRandom(1, 6);
    });
    setDice(newValues);
    diceRefs.forEach((d, index) => {
      d.current.rollDice(newValues[index]);
    });
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, width: "60%" }}>
        <Canvas camera={{ fov: 75, position: [0, 0, 4] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Die ref={diceRefs[3]} position={[-2, -0.9, 1]} />
          <Die ref={diceRefs[4]} position={[0, -0.9, 1]} />
          <Die ref={diceRefs[5]} position={[+2, -0.9, 1]} />

          <Die ref={diceRefs[0]} position={[-2, 0.9, 1]} />
          <Die ref={diceRefs[1]} position={[0, 0.9, 1]} />
          <Die ref={diceRefs[2]} position={[+2, 0.9, 1]} />
        </Canvas>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Baci" onPress={() => rollDice()}></Button>
      </View>
    </View>
  );
});

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
