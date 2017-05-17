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
	appState.results = [];
	data.items.forEach(object => {
		let image = object.snippet.thumbnails.high.url;
		let title = object.snippet.title;
		let desc = object.snippet.description;
		let ID = object.id.videoId;
		let video = {
			imageSrc: image,
			title: title,
			description: desc,
			IDlink: ID,

		};

		appState.results.push(video);

	});

	render(appState);

}

// render function

let render = (state) => {
	let html = ``;
	appState.results.forEach(object =>{
		html += `
			<div class="video">
				<h3>${object.title}</h3>
				<a href="https://www.youtube.com/watch?v=${object.IDlink}" target="_blank"><img src="${object.imageSrc}"></a>
				<p>${object.description}</p>
			</div>
		`
	});
	
	$('.resultsContainer').html(html);
}





//event listener

function eventHandler(){
	$('.js-search-form').submit(function(e){
		e.preventDefault();
		let userInput = $(this).find('.js-query').val();
		getDataFromApi(userInput, modState);
	});
}

$(function(){eventHandler();});



