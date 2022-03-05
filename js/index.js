const homeBtn=document.getElementById("home");

const welcome=document.getElementById("welcome");

const myForm=document.getElementById("myForm");

const myOutput=document.getElementById("myResult");

const goBtn=document.getElementById("goBtn");

const submitBtn= document.getElementById("submitBtn");

const goBack= document.getElementById("goBack");

const akanNAme= document.getElementById("displayAkanName");

homeBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  welcome.style.display="flex";
  myForm.style.display="none";
  myOutput.style.display="none";
})

goBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  welcome.style.display="none";
  myForm.style.display="flex";

  myForm.classList.add("changeSmooth");
})

goBack.addEventListener("click", (e)=>{
  e.preventDefault();
  welcome.style.display="none";
  myForm.style.display="flex";
  myOutput.style.display="none";
})

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  myOutput.style.display="flex";
  welcome.style.display="none";
  myForm.style.display="none";

  akanNAme.classList.add("type-animation");

  myOutput.classList.add("changeSmooth");
})