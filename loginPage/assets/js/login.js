$(document).ready(function(){
    
    $("#logIn").click(function(){
    var url = "https://app.sycamoreeducation.com/oauth/token";
    
    function getValue(id){
        var val = document.getElementById(id).value;
        console.log(val);
        return val;
    }
    
    var schoolid = getValue('schoolid');
    var username = getValue('username');
    var password = getValue('password');
    var clientid = "559af013b3d9d";
    var clientsecret = "7f79e983d19a24992342c9bf30fb855e";

    var data = "grant_type=password";
    data += "&username=" + username;
    data += "&schoolid=" + schoolid;
    data += "&password="+ password;
    data += "&client_id=" + clientid;
    data += "&client_secret=" + clientsecret;
    data += "&scope=open general individual";

    $.ajax({
        "method": "POST",
        "url": url,
        "data": data
    })
    .success(function(data){
        localStorage.setItem("token", data.access_token);
        location.href="../studentPage/index.html";
        })
    .error(function(){
        $("#errMsg").html("Login Failed. Please Try Again!");
        })
    });

});
