'use strict';
const ytdl = require('ytdl-core');

class Song {
	constructor(title, url, type){
		this.title = title;
		this.url = url;
		this.type = type;
	}
	getStream(){
		if(this.type == 'search')
			return this.url;
		if(this.type == 'youtube'){
			return ytdl(this.url, {
				retries: 7,
				highWaterMark: 32768,
				filter:'audioonly'
			});
		}
		if(this.type == 'soundcloud')
			return null
	}
}
module.exports = Song