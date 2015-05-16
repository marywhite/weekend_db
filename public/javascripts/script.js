function showUsers() {
    $.ajax({
        url: '/users/show',
        method: 'get',
        success: function (users, textStatus, jqXHR) {
            console.log(users);
            processUsers(users);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        },
        complete: function (jqXHR, textStatus) {
            console.log("getData() Ajax Get Complete:", textStatus);
        }
    });
}

function processUsers(users){
    for (var i= 0; i < users.length; i++){
        var user = users[i];
        first_name = user.name.first;
        last_name = user.name.last;
        username = user.username;
        appendName(username, first_name, last_name);
    }
}

function appendName(username, first_name, last_name){
    var li = $('<li/>')
        .text(username)
        .addClass('username')
        .appendTo('.users');

    var p = $('<p/>')
        .text(first_name + ' ' + last_name)
        .addClass('name')
        .appendTo(li);


}

$(document).ready(function(){
    showUsers();
});