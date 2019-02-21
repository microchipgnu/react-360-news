import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-360';

import styles from './styles'

const COLORS = ['black', 'white', 'orange', 'pink']

class Secondary extends React.Component {

	state = {
		currentColorIndex: 0
	}

	changeTextColor = () => {
		let newColorIndex = this.state.currentColorIndex
		newColorIndex++
		console.log(newColorIndex)
		this.setState({
			currentColorIndex: newColorIndex
		})
	};

	render() {
		return (
		<View style={styles.panel}>
			<Text style={{color: COLORS[this.state.currentColorIndex]}}>
				I've been thinking about developing a VR website for so long. This was my first try. I hope you enjoy.
			</Text>
			<VrButton onClick={this.changeTextColor} style={styles.button}/>
		</View>
		);
	}
};


export default Secondary
