import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'montserratSemiBold',
    textAlign: 'center',
    fontSize: 24,
  },
  container: {
    flex: 6,
    padding: 0,
    marginLeft: '23%',
    marginRight: '23%',
    marginTop: '8%',
    marginBottom: '8%',
    borderWidth: 6,
    borderRadius: 25,
    borderColor: 'white',
  },
  water: {
    backgroundColor: '#29ABE2',
    flex: 0.5,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    margin: 5.5,
    marginBottom: 12,
    justifyContent: 'flex-end',
  },
  air: {
    flex: 0.5,
  },
  fullness: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'montserratSemiBold',
  },
  denominator: {
    fontSize: 15,
  },
});

export default function WaterTank() {
  //   const { title } = props;
  return (
    <View style={styles.container}>
      <View style={styles.air} />
      <View style={styles.water}>
        <Text style={styles.fullness}>
          40
          <Text style={styles.denominator}>/82 oz</Text>
        </Text>
      </View>
    </View>
  );
}
