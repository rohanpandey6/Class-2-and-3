var arr = ['GUVI', 'I', 'am', 'geek'];
function transformFirstAndLast(arr) {
 var newObject = {} ;
 newObject[arr[0]] = arr.pop();
 return newObject;
}
console.log(transformFirstAndLast(arr))