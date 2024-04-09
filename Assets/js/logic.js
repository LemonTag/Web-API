
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function showAlert(event) {
// have a one piece of lego/ and then break back into one pieces/and you get your peices back
    const stringPost = localStorage.getItem('blogEntries')
    const blogEntries = JSON.parse(stringPost) || [];
    console.log("check");

    //you build an object with legos
    //this the object, has three fields of the values of the form.
    const blogEntry = {
        userNameEntry: userNameInput.value,
        titleEntry: titleNameInput.value,
        contentEntry: contentNameInput.value,
    }
    if (
        //
        //scan the fields to see if any of them are empty
        blogEntry.userNameEntry == '' || blogEntry.titleEntry == '' || blogEntry.contentEntry == '') {
        console.log(username.vlaue);
        alert("fillin in all areas");
        console.log("testing");
        event.preventDefault();
    }

    else {
        //take your lego into an array into a string and put it in the local storage
        //an Array to hold an object that gets put into this array
        blogEntries.push(blogEntry)
        //Making it into a string
        localStorage.setItem('blogEnties', JSON.stringify(blogEntries))
        console.log("nextPage");
    }


}
submitPress = document.getElementById("submit");
submitPress.addEventListener("click", showAlert);
userNameInput = document.getElementById('username');
titleNameInput = document.getElementById('title');
contentNameInput = document.getElementById('content')


