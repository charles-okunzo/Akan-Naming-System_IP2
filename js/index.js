//DOM variables
const homeBtn=document.getElementById("home");

const welcome=document.getElementById("welcome");

const myForm=document.getElementById("myForm");

const myOutput=document.getElementById("myResult");

const goBtn=document.getElementById("goBtn");

const submitBtn= document.getElementById("submitBtn");

const goBack= document.getElementById("goBack");

const akanNAme= document.getElementById("displayAkanName");
//Home button event
homeBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  welcome.style.display="flex";
  myForm.style.display="none";
  myOutput.style.display="none";
})
//Let's button event
goBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  welcome.style.display="none";
  myForm.style.display="flex";

  myForm.classList.add("changeSmooth");
})
//Go back button event
goBack.addEventListener("click", (e)=>{
  e.preventDefault();
  welcome.style.display="none";
  myForm.style.display="flex";
  myOutput.style.display="none";
})
//Suubmit button event
submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();


  let gender= document.form.gender.value;

  let birthDay= document.getElementById("birthDay").value;

  let birthDayDate= new Date(birthDay);
  
  let myDay=birthDayDate.getDay();

  let currentDate= new Date();
//Array of male Akan names
  const maleAkanNames=['<a href="https://en.wikipedia.org/wiki/Kwasi" class="text-warning" target="_blank" title="See Meaning">Kwasi</a>', 
  '<a href="https://en.wikipedia.org/wiki/Kwadwo" target="_blank" class="text-warning" title="See Meaning">Kwadwo</a>', 
  '<a href="https://en.wikipedia.org/wiki/Kwabena" target="_blank" class="text-warning" title="See Meaning">Kwabena</a>',
  '<a href="https://en.wikipedia.org/wiki/Kwaku" target="_blank" class="text-warning" title="See Meaning">Kwaku</a>',
  '<a href="https://en.wikipedia.org/wiki/Yaw_(name)" target="_blank" class="text-warning" title="See Meaning">Yaw</a>',
  '<a href="https://en.wikipedia.org/wiki/Kofi" target="_blank" class="text-warning" title="See Meaning">Kofi</a>',
  '<a href="https://en.wikipedia.org/wiki/Kwame" target="_blank" class="text-warning" title="See Meaning">Kwame</a>'];

  //Array of female Akan names
  const femaleAkanNames=['<a href="https://en.wikipedia.org/wiki/Akosua" class="text-warning" target="_blank" title="See Meaning">Akosua</a>',
  '<a href="https://en.wikipedia.org/wiki/Adwoa" class="text-warning" title="See Meaning">Adwoa</a>',
  '<a href="https://en.wikipedia.org/wiki/Abena" target="_blank" class="text-warning" title="See Meaning">Abena</a>',
  '<a href="https://en.wikipedia.org/wiki/Akua" target="_blank" class="text-warning" title="See Meaning">Akua</a>',
  '<a href="https://en.wikipedia.org/wiki/Yaa_(name)" target="_blank" class="text-warning" title="See Meaning">Yaa</a>',
  '<a href="https://en.wikipedia.org/wiki/Afua" target="_blank" class="text-warning" title="See Meaning">Afua</a>',
  '<a href="https://en.wikipedia.org/wiki/Ama_(given_name)" target="_blank" class="text-warning" title="See Meaning">Ama</a>'];

  //control flow
  if(gender===""){
    alert("Err:Select Your Gender!")
  }else if(birthDay===""){
    alert("Err:Enter Your Birthday!")
  }else if(birthDayDate>currentDate){
    alert("Err:Enter a Valid Date!")
  }else{
    if(gender==="male"){
      akanNAme.innerHTML= maleAkanNames[myDay]
    }else{
      akanNAme.innerHTML= femaleAkanNames[myDay];
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