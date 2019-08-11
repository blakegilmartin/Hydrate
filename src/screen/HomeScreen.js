import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import WaterTank from '../components/WaterTank';
import DrinkDate from '../components/DrinkDate';
import DrinkSelector from '../components/DrinkSelector';
import AddButton from '../components/AddButton';

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
    flex: 2,
    // borderWidth: 1,
    // borderColor: 'black',
    width: '100%',
  },
  list: {
    flex: 7.5,
    // borderWidth: 1,
    // borderColor: 'white',
    paddingBottom: '10%',
    width: '100%',
  },
  waterTank: {
    flex: 6,
    width: '100%',
  },
});

const description = 'Some drinks require more to hydrate as much as water, '
  + 'or dehydrate such as alcohol. Below is a list of coefficients '
  + 'to help you get an idea of how much each drink is contributing'
  + ' to your daily goal.';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('Drink Guide Constructor');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
          <Title title="You're Halfway there!" />
        </View>
        <View style={styles.waterTank}>
          <WaterTank waterLevel={0.5} />
        </View>
        <View style={styles.list}>
          <DrinkDate />
          <DrinkSelector />
          <AddButton />
        </View>
      </View>
    );
  }
}
