function sayHello() {
    $.ajax({
        url: '/users/hello',
        method: 'get',
        success: function (id, textStatus, jqXHR) {
            getUserName(id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        },
        complete: function (jqXHR, textStatus) {
            console.log("getData() Ajax Get Complete:", textStatus);
        }
    });
}

function getUserName(id) {
    $.ajax({
        url: '/users/hello/' + id,
        method: 'get',
        success: function (username) {
            displayGreeting(username);
        },
        error:function(xhr){
            console.log(xhr);
        }
    });
}

function displayGreeting(username){
    $('.welcome').text('oh. hi again, ' + username);
}


function showUsers() {
    $.ajax({
        url: '/users/show',
        method: 'get',
        success: function (users, textStatus, jqXHR) {
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

    var col1 = ('<td>'+ username +'</td>');
    var col2 = ('<td>'+ first_name + ' ' + last_name +'</td>');


    $('.table').append('<tr>'+ col1 + col2 +'</tr>');
}

$(document).ready(function(){
    sayHello();
    showUsers();
});