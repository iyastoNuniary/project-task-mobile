import React, { Component } from 'react';
import { StyleSheet, View , AppRegistry, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './component/home'
import Task1 from './component/Task1'
import Task2  from './component/Task2'
import Task3  from './component/Task3'

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Task1: { screen: Task1 },
    Task2: { screen: Task2 },
    Task3: { screen: Task3 },    
});



export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
