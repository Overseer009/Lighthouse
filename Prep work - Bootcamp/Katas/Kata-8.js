const repeatNumbers = function(data) {
  let result = '';
  for (let i of data) {
    for (let j = 0; j < i[1]; j++) {
      result += i[0];
    }
  } if(data.length != 1) {
    result += ',';
  }
  return result;
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));