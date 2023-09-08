import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
    //   q: 'music',
    //   part: 'snippet,id',
    //   regionCode: 'US',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '19083b0671mshfc7d86d654f1c90p14ba09jsn941d9f3cc881',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}