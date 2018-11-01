import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';

export default class AppNavigator extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="homeScreen" component={HomeScreen} title="HomeScreen" initial={true} />
          <Scene key="gameScreen" component={GameScreen} title="GameScreen" />
        </Scene>
      </Router>
    )
  }
}