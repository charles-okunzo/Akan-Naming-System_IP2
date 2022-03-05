const home=document.getElementById("home");

const welcome=document.getElementById("welcome");

const myForm=document.getElementById("myForm");

const myOutput=document.getElementById("myResult");

home.onclick=()=>{
  welcome.style.display="block";
  myForm.style.display="none";
  myOutput.style.display="none";
  console.log(welcome)
};