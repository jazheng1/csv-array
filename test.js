let csv = require('csv-array');
let file = 'PersonicX test - segments.csv'
csv.parseCSV(file, function(data){
  console.log(JSON.stringify(data));
  // tags(data)
}, true);

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
