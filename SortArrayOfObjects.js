let arr = [
  {
    name: 'shubham',
    id: 1,
  },
  {
    name: 'object2',
    id: 2,
  },
  {
    name: 'object3',
    id: 3,
  }
];

function sortArray(arr, value) {
  return arr.slice().sort((a, b) => {
    if (typeof a[value] === 'number' && typeof b[value] === 'number') {
      return a[value] - b[value];
    } else if (typeof a[value] === 'string' && typeof b[value] === 'string') {
      return a[value].localeCompare(b[value]);
    } else {
      return 0;
    }
  });
}

console.log(sortArray(arr, 'id'));
console.log(sortArray(arr, 'name'));
