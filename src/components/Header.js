import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1.25,
  },
});

export default function Header() {
  return <View style={styles.header} />;
}
