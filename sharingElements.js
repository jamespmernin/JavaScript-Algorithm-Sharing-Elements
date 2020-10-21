//SHARING ELEMENTS
// Solution adapted from here: https://stackoverflow.com/questions/8495687/split-array-into-chunks

const sharingElements = (arr, size) => {
  return [].concat.apply([],
    arr.map(function (elem, i) {
      return i % size ? [] : [arr.slice(i, i + size)];
    })
  );
}

console.log(sharingElements(["a", "b", "c", "d"], 3))

module.exports = {
  sharingElements
}