gg
// var number = Number(prompt("please enter your number"))
// var sum = number + 5
// alert("Your Add Result is " + sum)
// alert("Your Multiply Result is " + number * 10)
// alert("Your Divide result is " + number / 2)

// var currentyear=2026
// var birthyear =prompt("enter your birth year")        
// var maxage= currentyear-birthyear
// var minage= maxage-1
// alert("this can be your possiable age" + maxage+ "or" +minage)

// var snack = "Lays"
// var CurrentAge = 15
// var MaxAge = 65
// var amount = 200
// var sub = (MaxAge - CurrentAge) * 365 * amount 
// alert(sub)

// var userNum = prompt("Enter a number to display its multiplication table:");


// if (userNum === "" || userNum === null) {
//     userNum = 5;
// }
// alert(userNum + " x 1 = " + (userNum * 1));
// alert(userNum + " x 2 = " + (userNum * 2));
// alert(userNum + " x 3 = " + (userNum * 3));
// alert(userNum + " x 4 = " + (userNum * 4));
// alert(userNum + " x 5 = " + (userNum * 5));
// alert(userNum + " x 6 = " + (userNum * 6));
// alert(userNum + " x 7 = " + (userNum * 7));
// alert(userNum + " x 8 = " + (userNum * 8));
// alert(userNum + " x 9 = " + (userNum * 9));
// alert(userNum + " x 10 = " + (userNum * 10));

// var subject1 = prompt("enter first subject name")
// var subject2 = prompt("enter second subject name")
// var subject3 = prompt("enter third subject name")
// var totalMarks = 100
// var obtained1 = Number(prompt("please enter the " + subject1 + " subject obtained marks"))
// var obtained2 = Number(prompt("please enter the " + subject2 +  " subject obtained marks"))
// var obtained3 = Number(prompt("please enter the " + subject3 + " subject obtained marks"))
// var sum = obtained1 + obtained2 + obtained3
// alert("Your Percentage is " + (sum / totalMarks) * 100 + " %")

// var weather = prompt("Please give the weather number")
// if (weather % 3 === 0) {
//     alert("answer is divide by 3")
// }
// else if (weather % 3 != 0){
//     alert("Ja na laude")
// }

// var firstNum = Number(prompt("Please Enter the first value"))
// var secNum = Number(prompt("Please Enter the second value"))
// var action = prompt("Please select the method +,-,*,/,%")

// if (action == "+"){
//     alert("Your answer is " + (Number(firstNum) + Number(secNum)))
// }
// if (action == "-"){
//     alert("Your answer is " + (firstNum - secNum))
// }
// if (action == "*"){
//     alert("Your answer is " + (firstNum * secNum))
// }
// if (action == "/"){
//     alert("Your answer is " + (firstNum / secNum))
// }
// if (action == "%"){
//     alert("Your answer is " + (firstNum % secNum))
// }

// var firstNum = Number(prompt("please enter first integer"));
// var secNum = Number (prompt("Please enter second integer"));

// if (isNaN(firstNum , secNum)){
//     alert("Please enter the valid number")
// }
// else if (firstNum > secNum){
//     alert(firstNum + " is Larger Integer")
// }
// else if (secNum > firstNum){
//     alert(secNum + " is Larger Integer")
// }
// else if (firstNum == secNum){
//     alert("Both Numbers are equal")
// }

// var vowels1 = "a" ;
// var vowels2 = "e" ;
// var vowels3 = "i" ;
// var vowels4 = "o" ;
// var vowels5 = "u" ;

// var Ualphabet = prompt("please enter a alphabet")

// if (Ualphabet == vowels1){
//     alert("don't use vowels letters")
// }
// else if (Ualphabet == vowels2){
//     alert("don't use vowels letters")
// }
// else if (Ualphabet == vowels3){
//     alert("don't use vowels letters")
// }
// else if (Ualphabet == vowels4){
//     alert("don't use vowels letters")
// }
// else if (Ualphabet == vowels5){
//     alert("don't use vowels letters")
// }


// var user1 = prompt("Please enter your first password")
// var user2 = prompt("Please enter your second password")

// if (user1 == user2){
//     alert("Correct! The password you entered matches the original password")
// }
// else if (user1 != user2){
//     alert("Incorrect Password")
// }


// var greeting = "";
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else  {
//     greeting = "Good evening"
// }
// console.log (greeting)

// var time = Number(prompt("Enter time in 24-hour format (e.g. 1900):"));

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night");
// }
// else {
//     alert("Invalid time!");
// }

// // var colors = ["red", "green", "blue"];
// // var usercolor = prompt("Enter a color to add to the beginning:");
// // colors.push(usercolor);
// // console.log("Updated colors: " + colors);
// // colors.shift(0)
// // colors.pop()
// // console.log(colors)

// // var colors = ["Red", "Green", "Blue", "Yellow"];

// // var index = +prompt("At which index do you want to add a color?");

// // var newColor = prompt("Enter the color name you want to add:");

// // colors.splice(index, 1, newColor);

// // console.log("Updated Colors: " + colors);

// var colors = ["Red", "Green", "Blue", "Yellow"];

// var userNum = +prompt("Please enter the color you want to delete")

// var userNum1 = +prompt("Please enter quantity how many you want to delete")

// colors.splice(userNum, userNum1)

// alert(colors)
