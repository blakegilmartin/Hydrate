import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'montserratSemiBold',
    textAlign: 'center',
    fontSize: 23,
  },
  container: {
    flex: 1.25,
    padding: 0,
    margin: 0,
  },
});

export default function Title(props) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
