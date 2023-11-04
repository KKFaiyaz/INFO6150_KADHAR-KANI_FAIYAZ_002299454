$(document).ready(function() {
    
$("#loginBtn").on("click", () => {
    localStorage.setItem("username", $("#username").val())
    window.open("calc.html", "_self");
});


const Regex = {
    "email" : /^[a-zA-Z0-9._-]+@northeastern\.edu$/,
    "username" : /^[a-zA-Z][a-zA-Z0-9]{2,10}$/,
    "password" : /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%&]).{8,20}$/,
    "confirmPassword" : /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%&]).{8,20}$/,
}

const isValid = {
    "email":false,
    "username":false,
    "password":false,
    "confirmPassword":false
}

const nextDiv = {
    "email" : "usernameDiv",
    "username" : "passwordDiv",
    "password" : "confirmPasswordDiv"
}

$("#email, #username, #password, #confirmPassword").on("input", function(e) {
    const value = $(this).val();
    const id = $(this).attr("id");
    const name = $(this).attr("name");


    if (!value) {
        $("#"+id+"-error").text(name + " field cannot be empty.").removeClass("d-none").addClass("d-block");
        return;
    } else {
        $("#"+id+"-error").removeClass("d-block").addClass("d-none");
    }

    if ((id === "email" && /[!#\$%\^*(),?":;+=\[\]'?/\\~`{}|<>]/.test(value))) {
        $("#"+id+"-error").text("Emailaddress field cannot contain special characters expect @, ., -, _.").removeClass("d-none").addClass("d-block");
        return;
    }
    else if ((id === "password" || id === "confirmPassword") && /[!#\^*(),.?":;\-+=\[\]'?/\\~`{}|<>]/.test(value)){
        $("#"+id+"-error").text(name + " field cannot contain special characters except @, $, %, &.").removeClass("d-none").addClass("d-block");
        return
    }
    else if(id === "username" && /[!@\$&%#\^*(),.?":;\-+=\[\]'?/\\~`{}|<>]/.test(value)){
        $("#"+id+"-error").text("Username field cannot contain special characters.").removeClass("d-none").addClass("d-block");
        return;
    }
    else {
        $("#"+id+"-error").removeClass("d-block").addClass("d-none");
    }
    

    const minLength = parseInt($(this).attr("minlength")) || 0;
    const maxLength = parseInt($(this).attr("maxlength")) || 50;

    if (value.length < minLength || value.length > maxLength) {
        $("#"+id+"-error").text(name + " must be between " + minLength + " and " + maxLength + " characters.").removeClass("d-none").addClass("d-block");
        return;
    } else {
        $("#"+id+"-error").removeClass("d-block").addClass("d-none");
    }

    if(value.match(Regex[id]) !== null){
        isValid[id] = true;
        $("#" + nextDiv[id]).removeClass("d-none").addClass("d-block");
    }
    else{
        isValid[id] = false;
        $("#" + nextDiv[id]).removeClass("d-block").addClass("d-none");
        $("#"+id+"-error").text(name + " field is invalid").removeClass("d-none").addClass("d-block");
    }

    if(id == "confirmPassword"){
        $("#"+id+"-error").text("Password does not match").removeClass("d-none").addClass("d-block");
        isValid[id] = ($("#password").val() == $("#"+id).val())
    }

    if (Object.values(isValid).every(value => value === true)){
        $("#loginBtn").prop("disabled", false);
        $("#"+id+"-error").removeClass("d-block").addClass("d-none");
    } else {
        $("#loginBtn").prop("disabled", true);
    }
});

});
