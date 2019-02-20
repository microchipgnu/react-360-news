import React from 'react';
import {
  Text,
  View,
  VrButton,
} from 'react-360';

import styles from './styles'

class Home extends React.Component {

	plus = () => {
		let next = this.state.num + 1

		this.setState({
			num: next
		})
	};

	minus = () => {
		let next = this.state.num - 1

		this.setState({
			num: next
		})
	};

	state = {
		num: 0
	}

  render() {
    return (
      <View style={styles.panel}>
	    <Text style={styles.title}>
            {this.state.num}
        </Text>
		<VrButton onClick={this.plus} style={styles.button}>
            <Text style={styles.buttonText}>{'+'}</Text>
        </VrButton>
		<VrButton onClick={this.minus} style={styles.button}>
            <Text style={styles.buttonText}>{'-'}</Text>
        </VrButton>
      </View>
    );
  }
};


export default Home
