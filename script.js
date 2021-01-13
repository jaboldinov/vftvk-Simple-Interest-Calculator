// computes the amount receivable.
function compute() {
    var principal = document.getElementById("principal").value;
    // check if the amount is positive, otherwise throw an error and stop.
    if (principal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var date = new Date();
    var thisYear = date.getFullYear();
    // need to convert years (string) to numbers
    var futureYear = thisYear + Number(years);
    var result = document.getElementById("result");
    output = "If you deposit <mark>" + principal + "</mark>,<br>"
            + "at an interest rate of <mark>" + rate + "</mark>%.<br>"
            + "You will receive an amount of <mark>" + interest + "</mark>,<br>"
            + "in the year <mark>" + futureYear + "</mark>";
    result.innerHTML = output;
}

// current interest rate indicator 
function update() {
    var slider = document.getElementById("rate");
    var output = document.getElementById("demo");
    var percents = slider.value + "%";
    output.innerHTML = percents;
}


        