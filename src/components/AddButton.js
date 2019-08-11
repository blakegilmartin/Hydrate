import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
  },
});

export default function AddButton() {
  return <View style={styles.container} />;
}
