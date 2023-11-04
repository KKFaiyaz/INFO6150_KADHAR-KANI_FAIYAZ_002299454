$(document).ready(function () {

    const data = localStorage.getItem("username");
    $("#loggedInUser").text(data);
    
const calculate = (operation) => {
    const num1 = parseFloat($("#num1").val());
    const num2 = parseFloat($("#num2").val());
    if (isNaN(num1) || isNaN(num2)) {
    $("#calc-error").text("Invalid input").removeClass("d-none").addClass("d-block");
    return;
    }

    let result;
    switch(operation) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        if (num2 === 0) {
        $("#calc-error").text("Cannot divide by zero").removeClass("d-none").addClass("d-block");
        return;
        }
        result = num1 / num2;
        break;
    }
    $("#result").text(result);
    $("#calc-error").removeClass("d-block").addClass("d-none");
};


$("#addBtn, #subtractBtn, #multiplyBtn, #divideBtn").on("click", function() {
    const operation = $(this).attr("id").replace("Btn", "").toLowerCase();
    calculate(operation);
});

$("#num1, #num2").on("input", function() {
    const inputValue = $(this).val();
    const id = $(this).attr("id");
    const name = $(this).attr("name");

    if (!inputValue) {
        $("#"+id+"-error").text(name + " field cannot be empty.").removeClass("d-none").addClass("d-block");
        return;
    } else {
        $("#"+id+"-error").removeClass("d-block").addClass("d-none");
    }

    if (inputValue === Infinity) {
        $("#"+id+"-error").text(name + " field cannot be Infinty.").removeClass("d-none").addClass("d-block");
    } else {
        $("#"+id+"-error").removeClass("d-block").addClass("d-none");
    }
    

    if (!/^[0-9]*$/.test(inputValue)) {
        $("#"+id+"-error").text(name + " field cannot accept characters, try something numeric.").removeClass("d-none").addClass("d-block");
    } else {
        $("#"+id+"-error").removeClass("d-block").addClass("d-none");
    }
});

});

$("#num1, #num2").on("keyup keypress",function (e) {
    console.log(e.keyCode)
    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
        e.preventDefault();
    }
});