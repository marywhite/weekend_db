$.ajax({
    url: '/users/show',
    method: 'get',
    success: function(data, textStatus, jqXHR){
        console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown){
        console.log(textStatus,errorThrown);
    },
    complete: function(jqXHR, textStatus){
        console.log("getData() Ajax Get Complete:", textStatus);
    }
});
