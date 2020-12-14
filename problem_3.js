var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    var result = [];
    for (var i in obj){
    result.push([i, obj[i]])
    }
    return result
}
console.log(convertListToObject(obj))