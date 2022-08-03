
//switch case

function getDayName(dayNum) {
    var day;

    switch (dayNum) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Day doesnt exist " + dayNum + " isnt a valid number";
    }
    return day;
}

document.write(getDayName(30));
document.write("</br>");
document.write("</br>");


//do-while loop

var i = 11;
do {
    document.write(i + "</br>")
    i++;  //i = i+1;
} while (i <= 10)

document.write("</br>");
document.write("</br>");

//while loop

var i = 0;
while (i <= 10) {
    document.write(i + "</br>")
    i++;  //i = i+1;
}

document.write("</br>");
document.write("</br>");

//For loop

for (var i = 0; i <= 10; i++) {
    document.write("</br>" + i);
}

var friends = ["Jay", "lily", "Nathan"];
for (var i = 0; i < friends.length; i++) {
    document.write(friends[i] + "</br>")
}


document.write("</br>");
document.write("</br>");

//forEach loop
var books = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        pages: 500
    },
    {
        title: "Green Eggs & Ham",
        author: "Dr. Seuss",
        pages: 50
    }
]
var siblings = ["Oscar", "Angela", "Kevin"];

siblings.forEach(function (sibling) {
    document.write("</br>" + sibling + "</br>");
});

books.forEach(function (book) {
    document.write("</br>" + book.title + "</br>")
})

document.write("</br>");
document.write("</br>");


//Nested loop

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
        document.write("i=" + i + ",j=" + j + "</br>");
    }
}

document.write("</br>");
document.write("</br>");

//2D Arrays

var numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]

for (var i = 0; i <= numberGrid.length; i++) {
    for (var j = 0; j < numberGrid[i].length; j++) {
        document.write(numberGrid[i][j]);
    }
    document.write("</br>")
}

//JS timing

function sayHi() {
    alert("Hi");
}
