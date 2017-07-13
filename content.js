var checkExistPlaycounter = setInterval(function() {

	if($("#music-content > div.detail-view.album-view.same-artist.g-content.view-transition > div:nth-child(2) > div > table > thead > tr > th:nth-child(7)").length){
		$("#music-content > div.detail-view.album-view.same-artist.g-content.view-transition > div:nth-child(2) > div > table > thead > tr > th:nth-child(7)").hide();
	}

	if($("#music-content > div.g-content.view-transition > div > div:nth-child(3) > div.songlist-container.material-shadow-z1 > table > thead > tr > th:nth-child(5)").length) {
		$("#music-content > div.g-content.view-transition > div > div:nth-child(3) > div.songlist-container.material-shadow-z1 > table > thead > tr > th:nth-child(5)").hide();
	}
})
