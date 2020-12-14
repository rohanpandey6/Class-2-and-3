var securityQuestions = [
 {
 question: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
]
function chksecurityQuestions(securityQuestions,question, answer) {

var flag = true 
for (var i in securityQuestions){
    if (question === securityQuestions[i]['question']){
        flag = true
        if (answer === securityQuestions[i]['expectedAnswer']){
            return true
        }
        else {
            return false
        }
    }
    else {
        flag = false
    }
}
if (flag === false){
    return "question not found"
}
}
//Test case1:
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true

//Test case2:
var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase

//Test case3:
var ques = "What day is it?";
var ans  =  "Someday";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // "question not found"