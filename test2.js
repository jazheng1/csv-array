let fs = require('fs')
let tagObj = {};


function pair(tags, id) {
  for (let i = 0; i < id.length; i++) {
    console.log('1.', id[i])
    for (let j of tags) {
      console.log('tag=', j)
      // if the tag doesn't exist
      if (!tagObj[j]) {
        // add the array and id
        console.log('hi u r here')
        tagObj[j] = [id[i]];
      }
      else {
        console.log('I am here')
        // and if the id doesn't already exist in the tag
        if (tagObj[j].indexOf(j) < 0) {
          // push the id only
          tagObj[j].push(id[i]);
        }
      }
    }
  }
}

function toArray(file) {
  let string = fs.readFileSync(file, 'utf-8')
  // console.log('1', string)
  let array = string.trim().split('\n')
  // console.log('2', array)
  return array;
}

// console.log(toArray('test.txt'))

pair(toArray('test.txt'), ['01Y'])

console.log(tagObj)
