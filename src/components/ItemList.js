import React from 'react';
import {
  View, Text, StyleSheet, FlatList, Image,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  text: {
    color: 'white',
    fontFamily: 'montserratSemiBold',
    textAlign: 'center',
    fontSize: 15,
  },
  rowConainter: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  imageView: {
    height: 40,
    width: 35,
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  textView: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 12,
  },
  coefficient: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-end',
    flex: 1,
    textAlign: 'right',
    paddingRight: 13,
    // alignSelf: 'flex-end',
  },
  coefficientText: {
    color: 'white',
    fontFamily: 'montserratSemiBold',
    textAlign: 'right',
    fontSize: 15,
  },
});

export default function ItemList(props) {
  const { list } = props;
  const renderItemHere = item => (
    <View style={styles.container} key={item.item.name}>
      <View style={styles.rowConainter}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={item.item.image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{item.item.name}</Text>
        </View>
        <View style={styles.coefficient}>
          <Text style={styles.coefficientText}>{item.item.coefficient}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        style={{
          height: '100%',
          marginTop: 15,
          // borderColor: 'green',
          // borderWidth: 5,
        }}
        data={list}
        renderItem={item => renderItemHere(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

ItemList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
