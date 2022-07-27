//objects
// var person = {
//     name: "Anisha",
//     age: 28,
//     isFemale: true,
//     occupation: "Programmer",
//     printName: function () {
//         document.write("<h1>" + this.name + "</h1>")
//     }
// };

// person.printName();

var myMovie = {
    title: "The Social Network",
    releaseYear: "2010",
    duration: 2.0,
    actors: [
        {
            name: "Jessie",
            birthday: new Date("Oct 5, 1983"),
            hometown: "New York"
        },
        {
            name: "Rooney",
            birthday: new Date("April 17, 1985"),
            hometown: "Bedford, New York"
        }
    ]
}

document.write(myMovie.title);
document.write(myMovie.actors[0].name);