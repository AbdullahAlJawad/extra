var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var height = document.getElementById("height");
var width = document.getElementById("width");
var form = document.getElementById("form");

function validateForm(){
    if(age.value=='' || height.value=='' || (male.checked==false && female.checked==false)){
        alert("All fields are required!");
        document.getElementById("submit").removeEventListener("click",countBmi);
    }
    else{
        countBmi();
    }
}
document.getElementById("submit").addEventListener('click',validateForm);
function countBmi(){
    var p = [age.value,height.value,width.value];
    if(male.checked){
        p.push("male");
    }
    else if(female.checked){
p.push("female");
    }
}
form.reset();
var bmi = Number(p[2])/ Number(p[1])/100*Number(p[1]/100);
var result = "";
if(bmi<18.5){
    result = "Underweight";
}
else if(18.5<=bmi&&bmi<=24.9){
    result ="Healty";
}
else if(24.9<=bmi&&bmi<=34.9){
    result ="Overweight";
}
else if(30<=bmi&&bmi<=34.9){
    result ="Obese";
}
else if(bmi<=34){
    result ="Extremly Obese";
}
var h1 = document.createElement("h1");

var h2 = document.createElement("h2");

var t = document.createTextNode(result);

var b = document.createTextNode('BMI: ');

var r = document.createTextNode(parseFloat(bmi).toFixed(2));


h1.appendChild(t);

h2.appendChild(b);

h2.appendChild(r);


document.body.appendChild(h1);

document.body.appendChild(h2);

document.getElementById("submit").removeEventListener("click", countBmi);

document.getElementById("submit").removeEventListener("click", validateForm);

}

document.getElementById("submit").addEventListener("click", countBmi);
