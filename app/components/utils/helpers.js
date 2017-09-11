var axios = require('axios');

var key = "e7cb8fe5df824a259df7f51b45baf31c";

module.exports = {
	runQuery:(searchTerm,startYear,endYear) => {
		let URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&sort=newest&begin_date=${startYear}0101&end_date=${endYear}0101&api-key=${key}`
		return axios.get(URL).then(res => res.data.response.docs);
	},
	
	getArticles: x => {
		return axios.get("/api").then(res => res)
	},

	saveArticle: article => {
		return axios.post("/api",article).then(res => res)
	}

}
