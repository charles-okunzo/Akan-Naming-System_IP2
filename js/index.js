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


  let gender= document.form.gender.value;

  let birthDay= document.getElementById("birthDay").value;

  let birthDayDate= new Date(birthDay);
  
  let myDay=birthDayDate.getDay();

  const maleAkanNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  const femaleAkanNames=["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

  if(gender===""){
    alert("Err:Select Your Gender!")
  }else if(birthDay===""){
    alert("Err:Enter Your Birthday!")
  }else{
    if(gender==="male"){
      akanNAme.textContent= maleAkanNames[myDay]
    }else{
      akanNAme.textContent= femaleAkanNames[myDay];
    }
    myOutput.style.display="flex";
    welcome.style.display="none";
    myForm.style.display="none";

    akanNAme.classList.add("type-animation");

    myOutput.classList.add("changeSmooth");
  }

 
})

// const evaluateOutput= (gender,birthDay)=>{
  
  

//   // gender===""? alert("Select Your Gender!"):birthDay===""?alert("Enter Your Birthday"):gender==="male"?akanNAme.textContent= maleAkanNames[myDay]:akanNAme.textContent= femaleAkanNames[myDay];

// };