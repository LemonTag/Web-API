userNameInput = document.getElementById('username');
titleNameInput = document.getElementById('title');
contentNameInput = document.getElementById('content')
themeSwitcher = document.getElementById('#theme-switcher');
container = document.getElementById('container');
showAlert= document.getElementById("submit");


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function showAlert(event) {
    const stringifyPost = localStorage.getItem('blogEntries')
    const blogEnties = JSON.parse(stringPost) || [];
    console.log("check");
}
const blogEntry = {
    userNameEntry: userNameInput.value,
    titleEntry: titleNameInput.value,
    contentEntry: contentNameInput.value,
}
if (
    blogEntry.userNameEntry == "" || blogEntry.titleEntry == "" || blogEntry.contentEntry == "") {
    console.log(username.vlaue);
    alert("fillin in all areas");
    console.log("testing");
}

else {
    blogEntries.push(blogEntry)
    localStorage.setItem('blogEnties', JSON.stringify(blogEntries))
    console.log("nextPage");
}

