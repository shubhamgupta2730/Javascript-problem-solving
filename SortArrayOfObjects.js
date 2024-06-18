//sort array of objects by property value: 

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

function sortArray(arr, value){
  return arr.slice().sort((a,b)=>{
    return a[value]- b[value];
  });
}

console.log(sortArray(arr, 'id'));