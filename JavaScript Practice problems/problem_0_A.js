var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
 
}
//1
cat['height'] = '2'
cat['weight'] = '5'

//2
cat['name'] = 'Fluffyy';

//3
for (var i in cat['catFriends']){
    console.log(cat['catFriends'][i]['activities']);
}

//4
for (var i in cat['catFriends']){
    console.log(cat['catFriends'][i]['name'])
}

//5
total_weight = 0 
for (var i in cat['catFriends']){
    total_weight += cat['catFriends'][i]['weight'];
}
console.log(total_weight);

//6
total_activities = 0;
for (var i in cat['catFriends']){
    total_activities += cat['catFriends'][i]['activities'].length;
}

total_activities += cat['activities'].length;
console.log(total_activities);

//7
for (var i in cat['catFriends']){
    cat['catFriends'][i]['activities'].push('scratch');
    cat['catFriends'][i]['activities'].push('meow');
}
console.log(cat['catFriends']);
 
//8  
for (var i in cat['catFriends']){
    if (cat['catFriends'][i]['name'] === 'bar') {
        cat['catFriends'][i]['furcolor'] = 'black';
    }
}

console.log(cat);