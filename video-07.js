//practice ch-02
//problem 1
let age = prompt("Enter your age: ");
if(age>10 && age <20){
    console.log("you are age lies between 10 and 20.");
}
else{
    console.log("your age lies between 10 and 20.");
}

//problem 2
let day =3;
 switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
        default:
            console.log("Another day");
 }

//problem 3
let num =prompt("what is your age? ");
num = Number.parseInt(num);
if (num % 2 ==0 && num % 3 ==0) 
    {
    console.log("your number is divisible by 2 & 3.")
}
else  {
    console.log("your number is not divisible by 2 & 3.")
}

//problem 5
let age =19
let a = age > 18 ? "you can drive" : "yoou cannot drive";
console.log(a);