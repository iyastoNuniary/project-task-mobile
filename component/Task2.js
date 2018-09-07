import React, { Component } from 'react';
import { ScrollView, WebView, StyleSheet, AppRegistry, Text, View } from 'react-native';
import styleTest from '../style/styleSheet';


export default class Task2 extends Component {
  constructor(props) {
		super(props);
		const { navigation } = this.props;
		const item = navigation.getParam('data');
		this.state = {
			data: item
		}
	}
  render() {   
    return (
      <View style={styles.container}>
        
        {this.state.data.map((data, index) => {          
            return (
              <WebView key={index}
                style={styles.video}
                javaScriptEnabled={true}
                source={{ uri: data.url }}
              />
            )
        })}
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});
