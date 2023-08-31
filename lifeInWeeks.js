function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var months = yearsLeft * 12;
    var weeks = yearsLeft * 52;
    var days = yearsLeft * 365;

    console.log("You have " + days + " days, " + weeks + " weeks, or " + months + " months left to live");
}

lifeInWeeks(34);
