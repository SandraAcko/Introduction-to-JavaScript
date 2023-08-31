function bmiCalculator(weight,height) {
    var bmiTotal = Math.round(weight / Math.pow(height,2));
    return bmiTotal;
}

var bmi = bmiCalculator(57, 1.6);

console.log("Your BMI is " + bmi + ". If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range.");
