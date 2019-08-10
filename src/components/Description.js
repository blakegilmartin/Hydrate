import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  text: {
    color: 'white',
    fontFamily: 'montserrat',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default function Description(props) {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
