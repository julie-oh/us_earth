/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  TouchableHighlight
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class SearchPage extends Component<Props> {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }
  render() {
    const nextRoute = {
      component: SearchPage,
      title: 'It\'s NextPage',
      passProps: { myProp: 'bar'}
    }
    return (
      <View>
        <ScrollView>
          <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
            <Text style={styles.mainPage}>
              {"\nhey,\nyou can \nclick here"}
            </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

export default class App extends Component<Props> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'DanSuh and JulieOh',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  mainPage: {
    fontSize: 60,
  }
});
