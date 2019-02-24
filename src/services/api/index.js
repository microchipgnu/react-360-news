import axios from 'axios'

// const subreddits = ['worldnews', 'news'] 

const base_url = 'https://www.reddit.com/r/'

const  _makeRedditUrl = (subreddit) => (base_url + subreddit + '.json')


export default fetchNews = async (subreddit) => {
	const url = _makeRedditUrl(subreddit)

	await axios.get(url).then(response => {
		return response
	})
}
