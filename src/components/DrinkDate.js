import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'montserratSemiBold',
  },
});

export default function DrinkDate() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monday, July 15</Text>
    </View>
  );
}
