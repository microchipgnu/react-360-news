import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

import styles from './styles'

class Home extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
	    <Text style={styles.title}>
            Welcome to React 360
        </Text>
      </View>
    );
  }
};


export default Home
