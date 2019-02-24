import {
	StyleSheet,
  } from 'react-360';

const styles = StyleSheet.create({
	panel: {
		// Fill the entire surface
		width: 1000,
		height: 600,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	greetingBox: (elapsed, total) => ({
		padding: 20,
		backgroundColor: `rgba(255, 255, 255, 0.5)`,
		borderColor: '#639dda',
		borderWidth: 2,
		marginTop: 5,
	}),
	greeting: {
	  fontSize: 30,
	},
	title: {
		marginBottom: 30,
		fontSize: 55,
	},
	counter: {
		marginBottom: 15,
		fontSize: 100,
		color: 'orange',
	},
	button: {
	    backgroundColor: '#c0c0ff',
		borderRadius: 2,
		width: 75,
		height: 75,
		justifyContent: 'center',
		margin: 30,
	},
	buttonText: {
		textAlign: 'center',
		color: '#000000',
		fontSize: 30,
		fontWeight: 'bold',
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	footerContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	headerContainer: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	gazeButton: {
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		borderRadius: 2,
		width: 75,
		height: 75,
		justifyContent: 'center',
		width: '100%',
	},
	newsContainer:{
		flex: 1,
	},
	bodyContainer:{
		flex: 1,
		flexDirection: 'row',
	}
  });

  export default styles