import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-360';

import { fetchNews } from '../../services/api/news'

import GazeButton from '../../components/GazeButton';

import styles from './styles'

const News = (title, text, imageUrl) => (
	<View style={styles.newsContainer}>
		<Text style={styles.title}>
		 {title}
		</Text>
		<View>
			<Image source={imageUrl}/>
			<Text style={styles.title}>
				{text}
			</Text>
		</View>
	</View>
)

class Home extends React.Component {

	setGazed = () => {
		this.setState({ gazed: true });
	};

	state = {
		gazed: false,
		isLoading: false,

		previousNewsUrl: '',
		nextNewsUri: '',

		title: 'Default title',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
		text: 'Lore Ipsum asdasdasda askdnaksdj akjsdnakjsd'
	}

  render() {
	const { gazed, title, imageUrl, text } = this.state;
    return (
      <View style={styles.panel}>
	  	<View style={styles.headerContainer}>
			<GazeButton
				duration={1500}
				onClick={this.setGazed}
				render={(remainingTime, isGazed) => (
					<View style={styles.greetingBox}>
					<Text style={styles.greeting}>
						{gazed
						? "You have gazed me"
						: isGazed
							? remainingTime
							: "Gaze me"}
					</Text>
					</View>
				)}
				style={styles.gazeButton}
        	/>
		</View>

		<View style={styles.newsContainer}>
			<Text style={styles.title}>
				{title}
			</Text>
			<View style={styles.bodyContainer}>
				<Image source={{uri: imageUrl}}/>
				<Text style={styles.title}>
					{text}
				</Text>
			</View>
		</View>

		<View style={styles.footerContainer}>
			<GazeButton
				duration={1500}
				onClick={this.setGazed}
				render={(remainingTime, isGazed) => (
					<View style={styles.greetingBox}>
					<Text style={styles.greeting}>
						{gazed
						? "You have gazed me"
						: isGazed
							? remainingTime
							: "Gaze me"}
					</Text>
					</View>
				)}
				style={styles.gazeButton}
        	/>
		</View>
      </View>
    );
  }
};


export default Home
