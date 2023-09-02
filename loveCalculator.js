var user = prompt("Please enter your name");
var loveInterest = prompt("What is your love interest's name?");
var n = Math.random();
n = n * 100;
n = Math.round(n);

if (n >= 75) {
    alert("The compatability of " + user + " and " + loveInterest + " is " + n + "%. Go for it! you'll be a great couple!")
} 

if (n < 75 && n >= 30) {
    alert("The compatability of " + user + " and " + loveInterest + " is " + n + "%")
}

else {
    alert("The compatability of " + user + " and " + loveInterest + " is " + n + "% Umm.. perhaps there is someone else you might persue?")
}
