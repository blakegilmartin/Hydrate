import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HelloWorld from './src/components/HelloWorld';
import DrinkGuide from './src/screen/DrinkGuide';

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      montserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {
    const { width, height } = Dimensions.get('window');
    if (!this.state.loaded) {
      return <AppLoading />;
    }

    return (
      <View style={{ flex: 1 }}>
        {/* Bottom left to top right */}
        <LinearGradient
          colors={['#2E3192', '#1B1464']}
          style={{
            flex: 1,
          }}
          start={[1.0, 0.0]}
          end={[0.0, 1.0]}
        >
          <View style={styles.container}>
            <DrinkGuide></DrinkGuide>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 27,
  },
  info: {
    color: 'white',
    fontFamily: 'montserrat',
    textAlign: 'center',
    fontSize: 30,
  },
});
