import {
	StyleSheet,
  } from 'react-360';

const styles = StyleSheet.create({
	panel: {
		// Fill the entire surface
		width: 300,
		height: 600,
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	greetingBox: {
		padding: 20,
		backgroundColor: '#000000',
		borderColor: '#639dda',
		borderWidth: 2,
		marginTop: 5,
	},
	greeting: {
	  fontSize: 30,
	},
	title: {
		marginBottom: 15,
		fontSize: 70,
	},
	button: {
	    backgroundColor: '#c0c0d0',
		borderRadius: 5,
		width: 40,
		height: 44,
		width: '100%',
		flex: 0.2,
	},
	buttonText: {
		textAlign: 'center',
		color: '#000000',
		fontSize: 30,
		fontWeight: 'bold',
	},
	textContainer: {
		width: '100%',
		flex: 0.8,
	}
  });

  export default styles