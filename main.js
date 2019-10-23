function slice(string, start = 0, end = string.length) {
  let newStr = '';

  for (let i = start; i < end; i++) {
    
      newStr += string[i];
    } 
    return newStr;
}

function repeat(str, repetitions) {
  let repeatStr = '';
  for (let i = 0; i < repetitions; i++){
    repeatStr += str;
  }
  return repeatStr
}

function startsWith(string, substring) {

  for (let i = 0; i < substring.length; i++){
  if(string[i] === substring[i]){
    return true
  }
  else{ 
    return false
  }
  }
}

function endsWith(str, substring) {
let position = str.length - substring.length;
  for (let i = 0; i < str.length; i++){
    if(str[i + position] === substring[i]){
      return true
    }
   else {
    return false
   } 
    }
    
}

function includes(arr, item) {
  for (i = 0; i < arr.length; i++){
if (arr[i] === item){
  return true
}

  }
  return false
}

function join(arr, separator = '') {
  let newStr = ''
  
  for (i = 0; i < arr.length; i++){
   if (i === arr.length-1){
    newStr += arr[i]
   } 
   else 
   {newStr += arr[i] + separator;}

  }
return newStr;
}


function split(str, separator) {
const newArr = [];
for (i = 0; i < arr.length; i++){
if (separator === undefined){
  newArr += str;
}

}

}

function trimStart(str) {
  let newStr = ''
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let count = 0
  for (i = 0; i < letters.includes(str[i]); i++){
  if (' '.includes(str[i])) {
  count ++
  }
  for (i = count; i < str.length; i++){
  newStr += str[i];
}

  }return newStr
} 


function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
