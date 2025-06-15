import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to JapanesemonkApp 🚀</Text>
      <Text style={styles.subtitle}>You have clicked: {clicks} times</Text>
      <Button title="Tap Me" onPress={() => setClicks(clicks + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
});

