let guess = document.getElementById("guessInput").value;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let form = document.getElementById("guessForm");
let input = document.getElementById("guessInput");
let message = document.getElementById("message");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let guess = Number(input.value);
    if (guess > randomNumber) {
        message.classList.add(high)
        message.textContent = "Too high!";
    }
    else if (guess < randomNumber) {
        message.classList.add(low)
        message.textContent = "Too low!";
    }
    else {
         message.classList.add(won)
        message.textContent = "Correct! You won!";
    }
    console.log(randomNumber);
    console.log(guess);
});





































// console.log("JavaScript עובד!");

// // // document.getElementById("title").textContent="JavaScript עובד!"

// // // let name = prompt("Enter your name:");
// // // document.getElementById("p1").textContent= name
// // // if(name.length <10)
// // // {
// //  document.getElementById("p2").textContent="Your name is short."
// // }else {
// // document.getElementById("p2").textContent="Your name is long."
// // }

// // let btn= document.createElement("button")
// // btn.textContent="click me"
// // btn.classList.add("my-button");
// // document.body.appendChild(btn);
// let p = document.createElement("p");

// p.textContent = "Hello! I will disappear in 5 seconds.";
// document.body.appendChild(p);
// setTimeout(function () {
//     p.remove();
// }, 5000);

// setTimeout(function() {
//     const name = document.getElementById("name").value;
//     const age = document.getElementById("age").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     console.log(name);
//     console.log(age);
//     console.log(email);
//     console.log(message);
// }, 30000);
// let btn1= document.createElement("button")
// btn1.textContent="click me"
// btn1.classList.add("my-button1");
// document.body.appendChild(btn1);
// let btn2= document.createElement("button")
// btn2.textContent="click me"
// btn2.classList.add("my-button2");
// document.body.appendChild(btn2);

// btn1.addEventListener("click", function() {
//     console.log("The button was clicked!");
//     });
// btn2.addEventListener("click", function() {
//     let p = document.createElement("p");

// p.textContent = "Hello! I will disappear in 5 seconds.";
// document.body.appendChild(p);
// setTimeout(function () {
//     p.remove();
// }, 5000);
//     });


