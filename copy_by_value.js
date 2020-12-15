//object
oldobject = {hello: 'world' }
newobject = JSON.parse(JSON.stringify(oldobject));
newobject.new = 'javascript'
console.log(oldobject,newobject)

//array
oldobject = [1,2,3]
newobject = JSON.parse(JSON.stringify(oldobject));
newobject.push(4)
console.log(oldobject,newobject)