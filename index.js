fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement  = document.getElementById("jokeElement");
    jokeElement.innerHTML = " 🌀 "+jokeText;
});
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }
button.onclick = function () {
    jokeElement.innerHTML = " 🌀 "+jokeText;

}