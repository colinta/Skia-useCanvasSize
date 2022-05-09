import React, {useState} from 'react';
import {View} from 'react-native';
import {Canvas, Circle, Group, useCanvasSize} from '@shopify/react-native-skia';

function Playground() {
  const {width, height} = useCanvasSize().current;
  console.log('=============== App.tsx at line 7 ===============');
  console.log({width, height});
  const r = (width * 2) / 3;

  return (
    <Group blendMode="multiply">
      <Circle cx={r} cy={r} r={r} color="cyan" />
      <Circle cx={width - r} cy={r} r={r} color="magenta" />
      <Circle cx={width / 2} cy={height - r} r={r} color="yellow" />
    </Group>
  );
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Canvas style={{flex: 1}}>
        <Playground />
      </Canvas>
    </View>
  );
}
