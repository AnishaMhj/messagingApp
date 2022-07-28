// multiple choice questions

var questions = [
    {
        question: "What color are apples? \n(a) Red/Green \n\
         (b) Purple \n (c) Orange",
        answer: "a"
    },
    {
        question: "What color are bananas? \n(a) Blue \n\
         (b) Purple \n (c) Yellow",
        answer: "c"
    },
    {
        question: "What color are oranges? \n(a) Pink \n\
         (b) Green \n (c) Orange",
        answer: "c"
    },
];

var score = 0;
//for user response
for (i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].question);
    //check whether the response is correct or not
    if (response == questions[i].answer) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}
alert("You got " + score + "/" + questions.length);
