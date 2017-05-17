const appState = {
	results:[],
};


// API

var youtubeBaseUrl = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromApi(searchTerm, callback){
	var query = {
		part: 'snippet',
		q: searchTerm,
		key: 'AIzaSyDlUC2eqrlLx06vrOll0JSi7gR7YqYi8Us',
	}
	$.getJSON(youtubeBaseUrl, query, callback);
}

//modify state

let modState = (data) => {
	data.items.forEach(object => {
		let image = object.snippet.thumbnails.high.url;
		let title = object.snippet.title;
		let desc = object.snippet.description;
	let video = {
		imageSrc: image,
		title: title,
		description: desc,
	};
	appState.results.push(video);

	});
}

// render function

let render = (state) => {
	let html = ``;
	appState.results.forEach(object =>{
		html += `
			<div class="video">
				<h2>Title:${object.title}</h2>
				<img src="${object.imageSrc}">
				<p>${object.description}</p>
			</div>
		`
	});
	
	$('.resultsContainer').html(html);
}





//event listener

getDataFromApi("overwatch", modState);