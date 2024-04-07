const userNameInput = document.querySelector('username');
const titleNameInput = document.querySelector('title');
const contentNameInput = document.querySelector('content')

sumbitButton.addEventListener('click', function (event) {
    event.preventDefault();

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    const user = {
        uName: userNameInput.value,
        title: titleNameInput.value,
        content: contentNameInput.value,
    }

    localStorage.setItem('userProfile', JSON.stringify(user));
});