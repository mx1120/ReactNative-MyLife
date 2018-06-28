import React, { Component } from 'react'
import { AppRegistry, Text } from 'react-native';
import App from './App';

export default class DailyLife extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<Text>111</Text>
		)
	}
}

AppRegistry.registerComponent('DailyLife', () => App);
