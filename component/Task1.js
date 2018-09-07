import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';


export default class Task1 extends React.Component {
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
				<Text style={styles.welcome}>
					{this.state.data.map((data, index) => {
						if (data.title.includes("3")) {
							return data.title
						}
					})}
				</Text>
			</View>
		);
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});