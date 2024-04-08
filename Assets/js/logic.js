const userNameInput = document.querySelector('username');
const titleNameInput = document.querySelector('title');
const contentNameInput = document.querySelector('content')
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('container');


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

const button = document.getElementById("clickable")


// sumbitButton.addEventListener('clickable', function (event) {
//     event.preventDefault();

//     setTimeout(function userNameInput() { alert("Username"); }, time);
//     setTimeout(function titleNameInput() { alert("Tile"); }, time);
//     setTimeout(function contentNameInput() { alert("Content"); }, time);
//     // function myFunction() {
    //     var element = document.body;
    //     element.classList.toggle("dark-mode");
    // }

//     const user = {
//         uName: userNameInput.value,
//         title: titleNameInput.value,
//         content: contentNameInput.value,
//     }

//     localStorage.setItem('userProfile', JSON.stringify(user));

    

//     location.href = "./blog.html";


// });