//Adding function to add user

function addUser(){
    userName = document.getElementById('userName').value;
    localStorage.setItem('userName', userName);
    window.location = 'kwitter_room.html';
}