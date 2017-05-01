/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Header from './src/components/header';

const App = () => (
        <Header headerText={'Albums'} />
);



AppRegistry.registerComponent('albums', () => App);
