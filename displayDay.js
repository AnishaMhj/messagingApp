
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


//do-while loop

var i = 11;
do {
    document.write(i + "</br>")
    i++;  //i = i+1;
} while (i <= 10)


//while loop

var i = 0;
while (i <= 10) {
    document.write(i + "</br>")
    i++;  //i = i+1;
}

//For loop

for (var i = 0; i <= 10; i++) {
    document.write("</br>" + i);
}

var friends = ["Jay", "lily", "Nathan"];
for (var i = 0; i < friends.length; i++) {
    document.write(friends[i] + "</br>")
}