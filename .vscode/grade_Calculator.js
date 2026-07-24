function calculateGrade()
{

    let name=document.getElementById("name").value;
    let english =Number (document.getElementById("english").value);
    let maths =Number (document.getElementById("maths").value);
    let nepali =Number (document.getElementById("nepali").value);
    let science  =Number (document.getElementById("science").value);
    let social =Number (document.getElementById("social").value);

let total=english+maths+nepali+science+social;
let percentage=total/5;
document.getElementById("result").innerHTML=
name + "<br>"+
total +  "<br>" +
percentage + "%"


}