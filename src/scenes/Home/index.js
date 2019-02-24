import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-360';

// import fetchNews from '../../services/api/'

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
		this.setState({ gazed: true, isLoading: true });
	};

	state = {
		gazed: false,
		isLoading: false,

		currentIndex: 0,
		previousNewsUrl: '',
		nextNewsUri: '',

		news: [],

		title: 'Default title',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
		text: 'Lore Ipsum asdasdasda askdnaksdj akjsdnakjsd',
	}

	componentWillMount = () => {
		this.fetchNews('worldnews')
	}

	fetchNews = async (source) => {
		try {
		  let response = await fetch(
			'https://www.reddit.com/r/funnyandsad.json',
		  );
		  let responseJson = await response.json();
			console.log(responseJson.data.children[0].data.title)
		  this.setState({
			  news: responseJson.data.children,
			  title: responseJson.data.children[0].data.domain,
			  text: responseJson.data.children[0].data.title
		  })
		} catch (error) {
		  console.error(error);
		}
	}

	loadNews = (index) => {
		this.setState({
			currentIndex: index,
			title: this.state.news[index].data.domain,
			text: this.state.news[index].data.title
		})
	}

	loadNext = async () => {
		this.state.nextNewsUri === 'lastOne' 
			? this.fetchNews('news') 
			: this.loadNews(this.state.currentIndex + 1)
	}

	loadPrevious = async () => {
		this.state.nextNewsUri === 'lastOne' 
			? this.fetchNews('news') 
			: this.loadNews(this.state.currentIndex - 1)
	}

  render() {
	const { gazed, title, imageUrl, text, isLoading } = this.state;
    return (
      <View style={styles.panel}>
		<View style={styles.headerContainer}>
			<GazeButton
				duration={1500}
				onClick={this.loadPrevious}
				render={(remainingTime, isGazed) => (
					<View style={styles.greetingBox}>
						<Text style={styles.greeting}>
							{gazed
							? "You have gazed me"
							: isGazed
								? remainingTime
								: "Load previous..."}
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
		</View>
		<View style={styles.bodyContainer}>
				<Image style={styles.image} source={{uri: imageUrl}} />
				<Text style={styles.text}>
					{text}
				</Text>
		</View>

		<View style={styles.footerContainer}>
			<GazeButton
				duration={1500}
				onClick={this.loadNext}
				render={(remainingTime, isGazed) => (
					<View style={styles.greetingBox}>
						<Text style={styles.greeting}>
							{gazed
							? "You have gazed me"
							: isGazed
								? remainingTime
								: "Load next..."}
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
