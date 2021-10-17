            //***********Chapter # 21 - 25***********\\
// var a = prompt("Enter First Name")
// var b = prompt("Enter Last Name")
// alert("Welcome " + a + " " + b)

// var a = prompt("Your favorite phone")
// document.write("My favorite phone is: " + a);

// var name = ("Pakistani")
// document.write("String: " + name + "<br>")
// document.write(name.indexOf("n"))

// var name = ("Hello World")
// document.write("String: " + name + "<br>")
// document.write(name.indexOf("l"))

// var firstChar = ("Hello World")
// var firstChar = firstName.slice(0, 1);
// document.write(firstChar)

// var city = ["Hydrabad"]
// console.log("City: " + city)

// city = "Islamabad"
// console.log("After replacement: " + city)

// var mes = ("Ali and Sami are best friends. They play cricket and football together.")
// if (mes = "Ali and Sami are best friends. They play cricket and football together."){
//     document.write("Ali & Sami are best friends. They play cricket andfootball together.")
// }

// var x = parseInt("1000", 10)
// document.write("Value: " + x + "<br>" + "Type: String" + "<br>" )
// //return 1000
// document.write("Value: " + x + "<br>" + "Type: Number" + "<br>" )


// var cityToCheck = prompt("Enter value")
// document.write("User Input: " + cityToCheck + "<br>")
// cityToCheck = cityToCheck.toUpperCase()
// document.write("Upper Case: " + cityToCheck)


// var x = 35.36
// var y = ("35" + "36")
// document.write(y)

// var x = prompt("Enter username")
// if (x === "!"){
//     alert("enter valid username")
// }
// if else (x === "@"){
//     alert("enter valid username")
// }
// if else (x === "$"){
//     alert("enter valid username")
// }
// if else (x === "%"){
//     alert("enter valid username")
// }

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var A = prompt("Welcome to ABC bakery. What do you want to order")
// if (A === "cake"){
//     document.write("Cake is available")
// }
// else if (A === "apple pie"){
//     document.write("apple pie is unavailable")
// }
// else if (A === "cookie"){
//     document.write("cookie is unavailable")
// }
// else if (A === "chips"){
//     document.write("Cake is available")
// }



            //***********Chapter # 26 - 30***********\\

// var scoreAvg = +prompt("enter positive integer")
// document.write("number: " +scoreAvg + "<br>")
// var scoreAvg = Math.round(scoreAvg);
// document.write("round of value: " + scoreAvg + "<br>")
// document.write("floor value: " + scoreAvg + "<br>")
// var scoreAvg = Math.ceil(scoreAvg);
// document.write(Math.ceil(scoreAvg))

// var scoreAvg = +prompt("enter negative integer")
// document.write("number: " +scoreAvg + "<br>")
// var scoreAvg = Math.round(scoreAvg);
// document.write("round of value: " + scoreAvg + "<br>")
// document.write("floor value: " + scoreAvg + "<br>")
// var scoreAvg = Math.ceil(scoreAvg);
// document.write(Math.ceil(scoreAvg))

// var a = +prompt("enter value")
// var b = a * (-1)
// document.write("The absolute value of " + a + " is " + b)

// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// var scoreAvg = Math.round(numberOfStars)
// document.write("Random dice value: " + scoreAvg)

// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);
// var scoreAvg = Math.round(numberOfStars)
// document.write(scoreAvg + "<br>")

// if(scoreAvg == 1){
//     document.write("random coin value: Heads")
// }
// else{
//     document.write("random coin value: Tails")
// }

// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);
// var scoreAvg = Math.round(numberOfStars)
// document.write("Random number between 1 and 100: " + scoreAvg)

// var a = +prompt("enter your weight in kilograms")
// document.write("The weight of user is " + a + " kilograms")

// var a = Math.random()
// var improvedNum = (a * 10) + 1
// var numberOfStars = Math.floor(improvedNum)
// var scoreAvg = Math.round(numberOfStars)
// var b = +prompt("enter number between 1 to 10")
// if(b == scoreAvg){
//     document.write("Congratulation! you got the secret number" )
// }
// else{
//     alert("try again")
// }



            //***********Chapter # 31 - 34***********\\

// var rightNow = new Date()
// document.write(rightNow)

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date()
// var n = month[d.getMonth()]
// document.write("Current Month: " + n)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday)
// if(nameOfToday == "Sat"){
//     document.write("It's Fun day")
// }
// else if(nameOfToday == "Sat"){
//     document.write("It's Fun day")
// }

// var a = new Date()
// var d = new Date()
// var n = d.getTime()
// var m = d.getMilliseconds()
// var k = d.getMinutes()
// var j = n-m

// document.write("Current Date: "+ a + "<br>")
// document.write("Elapsed Milliseconds since Jan 1, 1970: "+ m + "<br>")
// document.write("Elapsed Minutes since Jan 1, 1970: "+ k + "<br>")

// var a = new Date()
// var b = a.getHours()
// document.write(b + "<br>")
// if(b <= 12){
//     document.write("AM")
// }
// else if(b >= 12){
//     document.write("PM")
// }

// var d = new Date();
//   d.setDate(5);
//   alert(d)

// var d = new Date();
// d.setDate(30);
// d.setMonth(11)
// alert(d)

// var d = new Date()
// d.setDate(18)
// d.setMonth(5)
// d.setFullYear(2015)
// var a = new Date()
// var b = a - d
// alert(b) 

// var d = new Date()
// d.setDate(5)
// d.setMonth(11)
// d.setFullYear(2015)
// d.setSeconds(15)
// alert(d)

// var d = new Date()
// d.setDate(5)
// document.write("On reference date " + d + "<br>")
// d.setMonth(11)
// d.setFullYear(2015)
// d.setHours(22)
// document.write("1 hour ago, it was " + d )

// var d = new Date()
// d.setDate(5)
// alert("Current date: " + d + "<br>")
// d.setMonth(11)
// d.setFullYear(2015)
// d.setFullYear(1015)
// alert("100 years back, it was " + d )

// var a = new Date("Dec 26, 1996")
// var aSec = a.getTime()
// alert(aSec)

// var dob = new Date (prompt("enter your dob", "Jun 5, 1998"))
// var dobmili = dob.getTime()
// var today = new Date()
// var todayMili = today.getTime()
// var diff = todayMili - dobmili
// var diff = diff/(1000*60*60*24*30)
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("Your age is " + accuage + "<br>")
// document.write("Your birth year: " + diff)

// var a = prompt("Costumer Name")
// document.write("Costumer Name: " + a + "<br>")
// var b = prompt("Month")
// document.write("Month: " + b + "<br>")
// var numOFunits = prompt("Enter number of units")
// document.write("Number of units: " + numOFunits + "<br>")
// var ChargesPUnit = 16
// var netamount = numOFunits * ChargesPUnit
// document.write("Net Amount Payable (within Due Date) =" + netamount  + "<br>")
// var late = 350
// document.write("Late payment charges: " + late + "<br>")
// var gramount = (netamount + late)
// document.write("Gross Amount Payable (after Due Date)" + gramount)




            //***********Chapter # 36 - 38***********\\

// function tellTime() {
// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// document.write(now);
// }

// tellTime();
    
// function greetUser(){
//     var a = prompt("first name")
//     var b = prompt("last name")
//     alert("Hello There " + a + b)
// }

// greetUser();

// function Sum(){
//     var a = +prompt("first number")
//     var b = +prompt("second number")
//     var c = a + b
//     alert("Sum of two number  " + c)
// }

// Sum();

// function Sum(){
//     var a = +prompt("first number")
//     var b = +prompt("enter operator")
//     var c = +prompt("second number")
//     if (b === "+"){
//         alert(a + c)
//     }
//     else if(b === "-"){
//         alert(a-c)
//     }
// }

// Sum();

// function square(){
//     var a = +prompt("enter number")
//     var b = a*a
//     alert(b)
// }

// square();

// function factorial(){



// function factorial(){
//     var a = +prompt("enter number")
//     for(i = a; i <= a; i--){
//         var b = a * i
//         alert(b)
//     }
    
// }

// factorial();

// function Counting(){
// var a = +prompt("Starting number")
// var b = +prompt("Ending number")
// for(i = a; i <= b; i++){
//     document.write(i + "<br>")
// }
// }

// Counting();


// function hypo(){

//     var a = +prompt("Enter Base")
//     var b = +prompt("Enter Perpendicular")
//     var c = a*a
//     var d = b*b
//     var e = c + d
//     document.write("Hypotenus = " + e)
// }

// hypo();

// function Area(){

// var a = +prompt("Enter width in meter")
// var b = +prompt("Enter height in meter")
// var c = a * b
// document.write("Area of Traingle = " + c + "m^2")
// }
// Area();

//function pallindrom(){
// var name = prompt("enter phrase")
// name = name.toUpperCase()
// var firstChar = name.slice(0,1)
// var lastChar = name.charAt(name.length - 1)
// if(firstChar === lastChar){
//     alert("It is pallindrom")
// }
// else{
//     alert("Not Pallindrom")
// }
// }

//pallindrom();

// function changeCase(){
// var input = "hello world"
// var output = input.substring(0, 1).toUpperCase() + input.substring(1);
// alert(output)
// }

// changeCase();
// function longestWord(){
//     var a = "Web Development Toturial"
//     var str = a.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//             alert(i)
//         }
//     }

// }

// longestWord();


// function calcCircumference(){

//     var a = +prompt("enter radius")
//     var b = 3.142
//     var c = (2 * a * b)
//     document.write("The Circumference is: " + c + "<br>")

// }

// calcCircumference();

// function calcArea(){

//     var a = +prompt("enter radius")
//     var b = 3.142
//     var c = (2 * (a*a) * b)
//     document.write("Area of circle: " + c + "<br>")

// }

// calcArea();

