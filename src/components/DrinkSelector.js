import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    borderWidth: 5,
  },
});

export default function DrinkSelector() {
  return <View style={styles.container} />;
}
