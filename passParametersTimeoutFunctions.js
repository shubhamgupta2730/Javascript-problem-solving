function showNumbers(num){
  setTimeout(function(){
    console.log(num);
  }, 2000)
}

showNumbers(30);

function showName(name){
  setInterval(function(){
    console.log(name);
  }, 2000)
}
showName('hello');