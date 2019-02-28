
export default fetchNews = async (source) => {
	try {
	  let response = await fetch(
		source,
	  );
	  let responseJson = await response.json();
		console.log(responseJson)
	  this.setState({
		  news: responseJson.articles,
		  title: responseJson.articles[0].title,
		  text: responseJson.articles[0].description,
		  imageUrl: responseJson.articles[0].urlToImage
	  })
	} catch (error) {
	  console.error(error);
	}
}

