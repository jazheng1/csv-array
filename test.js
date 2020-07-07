"use strict";

let file = 'PersonicX test - segments.csv';
let fs = require('fs')
let testFile = 'test.csv'
const csv = require('csvtojson');
csv()
.fromFile(file)
// .fromFile(testFile)
.then((jsonObj)=>{
	// console.log(jsonObj)
	let pairedTags = pair(jsonObj)
	console.log(pair(jsonObj));
	fs.writeFileSync('pair.txt', JSON.stringify(pairedTags), 'utf8')
});

function pair(d) {
	let tagObj = {};
	// loops through json objects
	for (let obj of d) {
		// console.log('first loop', obj.tags)
		let arr = obj.tags.split("\n"); // puts tags into array
		// console.log('array:', arr)
		for (let tag of arr) { // loop through tags
			if(!tagObj[tag]) {
				tagObj[tag] = [obj.cluster_id];
			}
			else {
				tagObj[tag].push(obj.cluster_id);
			}
		}
	}
	return tagObj;
}
