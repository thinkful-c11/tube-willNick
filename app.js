const appState = {
	results:[],
};

var youtubeBaseUrl = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromApi(searchTerm, callback){
	var query = {
		part: 'snippet',
		q: searchTerm,
		key: 'AIzaSyDlUC2eqrlLx06vrOll0JSi7gR7YqYi8Us',
	}
	$.getJSON(youtubeBaseUrl, query, callback);
}

// function getDataFromApi(searchTerm, callback){
// 	var q = 'overwatch'
// 	var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

// 	request.execute(function(response){
// 		var str = JSON.stringify(response.result);
// 		console.log(str);
// 	});

// }

const logData = (data) => {
	console.log(data);
};

getDataFromApi('Overwatch', logData);
