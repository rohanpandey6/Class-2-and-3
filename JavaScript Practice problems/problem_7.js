var expected = {foo: 5, bar: 6};
var actual = {bar: 6, foo: 5}

function assertObjectsEqual(actual, expected, testName){
 // your code here
 if (JSON.stringify(actual) === JSON.stringify(expected)){
     return "Passed"
 }
 else{
     return "FAILED "+ testName +". Expected "+ JSON.stringify(expected) +", but got "+ JSON.stringify(actual)
 }
}

console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'))