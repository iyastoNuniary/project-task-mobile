import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		const { navigate } = this.props.navigation;
		const data = [
			{
				title: 'Video 1',
				url: 'https://www.youtube.com/watch?v=GILigSWRs3M'
			},
			{
				title: 'Video 2',
				url: 'https://mystorage/video2.jpeg'
			},
			{
				title: 'Video 3',
				url: 'https://mystorage/video3.jpeg'
			}
		]
		return (
			<View style={styles.container}>				
				<View style={styles.buttonContainer}>
					<Button
						onPress={() => navigate('Task1', {data: data})}
						title="Task 1"
					/>
				</View>

				<View style={styles.buttonContainer}>
					<Button
						onPress={() => navigate('Task2', {data: data})}
						title="Task 2"
					/>
				</View>

				<View style={styles.buttonContainer}>
					<Button
						onPress={() => navigate('Task3')}
						title="Task 3"
					/>
				</View>				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		justifyContent: 'center',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#ff0000',
	},
	buttonContainer: {
		margin: 10
	},
	alternativeLayoutButtonContainer: {
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})
