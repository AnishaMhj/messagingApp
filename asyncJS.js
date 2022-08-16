
//Asynchronous JS

//Callback functions
//Waiting for timeout
setTimeout(myFn, 1000);

function myFn() {
    document.getElementById("demo").innerHTML = "Hi";
}

//Waiting for intervals

setInterval(myDate, 1000);

function myDate() {
    let d = new Date();
    document.getElementById("demo1").innerHTML = d.getHours() +
        ":" + d.getMinutes() + ":" + d.getSeconds();
}

//Promise

function myDisplayer(some) {
    document.getElementById("demo2").innerHTML = some;
}
let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }

});

myPromise.then(
    function (value) {
        myDisplayer(value);
    },
    function (error) {
        myDisplayer(error);
    }
)

//Waiting for a timeout using Promise

const promiseTime = new Promise(function (myResolve, myReject) {
    setTimeout(() => {
        myResolve("I love You!!");
    }, 2000);
});

promiseTime.then(
    function (value) {
        document.getElementById("demo2").innerHTML = value;
    }
)

//Javascript Async
//using async and await to make promises easier to write

//async example
async function asyPromise() {
    return ("YO yo!!");
}
asyPromise().then(
    function (value) {
        document.getElementById("demo3").innerHTML = value;
    }
)

//await example
//using

async function display() {
    let awaPromise = new Promise(function (resolve, reject) {
        resolve("this is using resolve and reject");
    });
    document.getElementById("demo4").innerHTML = await awaPromise;
}


display();