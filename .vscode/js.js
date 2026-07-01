

// document.getElementById("para").innerHTML="hello";


document.getElementById("para").style.fontSize="40px";

//to remove content of 0th index class (first class)
document.getElementsByClassName("para2")[0].style.display ="none";

//to remove all content of every class {using array)
let elements=document.getElementsByClassName("para2");
for(let i=0;i<elements.length;i++){
    elements[i].style.display="none";
}
//js display (innerHTML,innerText,document.write)
/*inner html allows to edit using tags but innerText doesnot
document.getElementById("para").innerHTML = "<h1>Hello</h1>";
document.getElementById("para").innerText = "<h1>Hello</h1>";(error)*/
document.write("sadikshya      ");
window.alert("displaying alert msg using window.alert in js ");
console.log("hellooooo");

let x=5;
let y=6;
let z=x+y;
document.write(z);

/*let -  block scope and cannot be redeclared in same scope   introduced by Es6 (2015)
 var - functional, global scope  variable and can be redeclared */

 function myFunction(){
    let a = 23;//cant redeclare variable a
    // document.write(a);
    console.log(a);
    var b=10;
    console.log(b);
    var b=20           // can be redeclare since we used var keyword
    console.log(b);
 }
 myFunction();

 //Task1: student information(let ) Scenario

  //A student changes their class after admission.//

  function studentInfo(){
    let studentClass = "first sem";
    document.write("class:" + studentClass  );

    studentClass= "second sem";
    document.write("class:" + studentClass  );

  }
  studentInfo();