window.onload = function(){
    var userName = prompt("May I know your Name: ");
    var userNameElement = document.getElementById("name");
    userNameElement.innerText = "Hello, " + userName;
}