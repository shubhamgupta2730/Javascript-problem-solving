//get the file extension from the filename: 

function getFileExtension(filename) {
  return filename.split('.').pop();
}

console.log(getFileExtension('file.pdf'));

