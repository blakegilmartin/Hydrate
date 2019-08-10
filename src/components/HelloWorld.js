import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  info: {
    fontFamily: 'montserrat',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default function HelloWorld() {
  return <Text style={styles.info}>Finally I have the font working</Text>;
}
