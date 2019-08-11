import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import Description from '../components/Description';
import ItemList from '../components/ItemList';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    width: '100%',
    padding: 0,
  },
  header: {
    color: 'white',
    fontFamily: 'montserrat',
    textAlign: 'center',
    fontSize: 30,
    flex: 3,
    // borderWidth: 1,
    // borderColor: 'black',
    width: '100%',
  },
  list: {
    flex: 6,
    // borderWidth: 1,
    // borderColor: 'white',
    paddingBottom: '10%',
    width: '100%',
  },
});

const description = 'Some drinks require more to hydrate as much as water, '
  + 'or dehydrate such as alcohol. Below is a list of coefficients '
  + 'to help you get an idea of how much each drink is contributing'
  + ' to your daily goal.';

const drinkList = [
  {
    name: 'Water',
    coefficient: 1,
    image: require('../../assets/icons/Water.png'),
  },
  {
    name: 'Coffee',
    coefficient: 0.8,
    image: require('../../assets/icons/Coffee.png'),
  },
  {
    name: 'Tea',
    coefficient: 0.85,
    image: require('../../assets/icons/Tea.png'),
  },
  {
    name: 'Coconut Water',
    coefficient: 0.85,
    image: require('../../assets/icons/Coconut_Water.png'),
  },
  {
    name: 'Juice',
    coefficient: 0.55,
    image: require('../../assets/icons/Juice.png'),
  },
  {
    name: 'Mineral Water',
    coefficient: 0.93,
    image: require('../../assets/icons/Sparkling_Water.png'),
  },
  {
    name: 'Sports Drink',
    coefficient: 0.85,
    image: require('../../assets/icons/Energy_Drink.png'),
  },
  {
    name: 'Soda',
    coefficient: 0.6,
    image: require('../../assets/icons/Soda.png'),
  },
  {
    name: 'Beer',
    coefficient: 1.0,
    image: require('../../assets/icons/Beer.png'),
  },
  {
    name: 'Kombucha',
    coefficient: 0.6,
    image: require('../../assets/icons/Kombucha.png'),
  },
  {
    name: 'Milk Shake',
    coefficient: 0.6,
    image: require('../../assets/icons/Milk_Shake.png'),
  },
  {
    name: 'Milk',
    coefficient: 0.6,
    image: require('../../assets/icons/Milk.png'),
  },
  {
    name: 'Other',
    coefficient: 0.6,
    image: require('../../assets/icons/Other.png'),
  },
  {
    name: 'Smoothie',
    coefficient: 0.6,
    image: require('../../assets/icons/Smoothie.png'),
  },
  {
    name: 'Strong Liquor',
    coefficient: 0.6,
    image: require('../../assets/icons/Strong_Liquor.png'),
  },
  {
    name: 'Wine',
    coefficient: 0.6,
    image: require('../../assets/icons/Wine.png'),
  },
];

export default class DrinkGuide extends React.Component {
  constructor(props) {
    super(props);
    console.log('Drink Guide Constructor');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
          <Title title="Drink Guide" />
          <Description text={description} />
        </View>
        <View style={styles.list}>
          <ItemList list={drinkList} />
        </View>
      </View>
    );
  }
}
