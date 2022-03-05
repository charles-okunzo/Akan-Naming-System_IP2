const homeBtn=document.getElementById("home");

const welcome=document.getElementById("welcome");

const myForm=document.getElementById("myForm");

const myOutput=document.getElementById("myResult");

const goBtn=document.getElementById("goBtn");

const submitBtn= document.getElementById("submitBtn");

homeBtn.onclick=()=>{
  welcome.style.display="flex";
  myForm.style.display="none";
  myOutput.style.display="none";
};

goBtn.onclick=()=>{
  welcome.style.display="none";
  myForm.style.display="flex";
};

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  myOutput.style.display="flex";
  welcome.style.display="none";
  myForm.style.display="none";
})