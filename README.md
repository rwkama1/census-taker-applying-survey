
## Description 

A census taker collects certain data by applying surveys for the latest National Population and Housing Census. You want to obtain from all the people you can survey in one day, what percentage have primary, secondary, technical career, professional studies, and postgraduate studies. 

## Usage

```Javascript

let Person=require("./Person").Person;
let Result=require("./Result").Result;

let arraypeople=[];
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Secondary"));
arraypeople.push(new Person("Technical Career"));
arraypeople.push(new Person("Professional"));
arraypeople.push(new Person("Postgraduate"));
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Secondary"));
arraypeople.push(new Person("Technical Career"));
arraypeople.push(new Person("Professional"));
arraypeople.push(new Person("Postgraduate"));
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Secondary"));
arraypeople.push(new Person("Technical Career"));
arraypeople.push(new Person("Professional"));
arraypeople.push(new Person("Postgraduate"));
arraypeople.push(new Person("Technical Career"));
arraypeople.push(new Person("Professional"));
arraypeople.push(new Person("Postgraduate"));
arraypeople.push(new Person("Technical Career"));
arraypeople.push(new Person("Professional"));
arraypeople.push(new Person("Postgraduate"));
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Primary"));
arraypeople.push(new Person("Primary"));

let result=new Result(arraypeople);
let calc=result.calc_survey();

console.log(Math.floor(calc.avgpri)+"% primary study");
console.log("                                                ");
console.log(Math.floor(calc.avgsec)+"% secondary study");
console.log("                                                ");
console.log(Math.floor(calc.avgtech)+"% technical career study");
console.log("                                                ");
console.log(Math.floor(calc.avgprof)+"% professional studies");
console.log("                                                ");
console.log(Math.floor(calc.avgpost)+"% postgraduate studies");

```