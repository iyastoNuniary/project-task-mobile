import React, { Component } from 'react';
import { ScrollView, Image, TouchableWithoutFeedback, Dimensions, Modal, StyleSheet, AppRegistry, Text, View } from 'react-native';
import styleTest from '../style/styleSheet';
import ImageElement from './ImageElement';


export default class Task3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataImage: [],
      modalVisible: false
    }
  }

  componentDidMount() {    
    let url = "http://operationreportdev.kar-ads.com/api/breed/boxer/images";   
    let that = this;

    fetch(url, {
      method: 'GET'
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        that.setState({
          dataImage: data.message
        })
        console.log("data.message: ",data.message)
      })
      .catch((error) => {
        alert(error)
      });
  }

  render() {
    return (
      <ScrollView>
      
      <View style={styles.container}>
        {this.state.dataImage.map((data, index) => {
          return(
          <TouchableWithoutFeedback key={index}>            
            <View style={styles.imagewrap}>
              <ImageElement imagesource={data}> </ImageElement>              
            </View>
          </TouchableWithoutFeedback>
          )
        })}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee'
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/3) - 12,
    width: (Dimensions.get('window').width/2) - 4,
    backgroundColor: '#fff'
  },  
});