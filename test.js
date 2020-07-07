"use strict";

let file = 'PersonicX test - segments.csv';
const csv = require('csvtojson');
csv()
.fromFile(file)
.then((jsonObj)=>{
    // console.log(jsonObj[1].tags);
	let arr = jsonObj[1].tags.split("\n");
	console.log(arr)

});






function tags(d) {
	var tagsObj = {};
	for (var r in d) {
		// skip header row
		//if (r == 0) continue;
		// shorten
		var row = d[r];
		console.log(row);
		// remove unused properties
		for (var prop in row) {
			//console.log(prop)
			if (row[prop] == "")
				delete row[prop];
		}
		//console.log(row);
		tagsObj[row.name] = row;
	}
	console.log("tags = ");
	console.log(JSON.stringify(data));
	console.log(";");
}
