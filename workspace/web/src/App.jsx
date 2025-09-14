import React from 'react';
import { Button } from 'shared';

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Web app using shared Button</h1>
      <p>This Button component is imported from the shared workspace and uses react-native-web under the hood.</p>
      <Button title="Click me" onPress={() => alert('Clicked!')} />
    </div>
  );
}
