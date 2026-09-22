console.log("running main.js");
// ! 1 - need to get all the var
const usernameInput = document.getElementById("username");
const usernameInput2 = document.getElementById("username2");
const searchButton = document.getElementById("searchBtn");
const sellectionOpt = document.getElementById("view");
const sellectionOpt2 = document.getElementById("view2");
const dataPrintBase = document.getElementById("output");
const dataPrintBase2 = document.getElementById("output2");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");


console.log("opc",sellectionOpt.value); // this is not giving obj it is giving all which is the part of view 
// console.log(sellectionOpt[3]); this works

let userNameInputValueUser= "";
let userNameInputValueUser2 = "";
let getFetchDataForUser = {}; // obj
let getFetchDataForUser2 = {}; // obj
let userSellectedOpection = "";
let imageForUser = "";
let imageForUser2 = "";

const para = document.createElement("p");
const options = [
  "name",
  "followers",
  "following",
  "location",
  "public_repos",
  "created_at",
  "updated_at",
];

//! 2 - fetch data
async function gitfetch(username) {
  const result = fetch(`https://api.github.com/users/${username}`);
  // now i will get the unclean obj
  const unCleanObj = await result; // json also give a promises
  return unCleanObj.json();  // async will make it a promise box even if we use await
}


//! 3 - SearchBtn
async function searchBtn() {
  //   console.log(userNameInputValueUser);
  if (usernameInput.value!= "" && userNameInputValueUser!=usernameInput.value.trim()) {
    //  console.log(userNameInputValueUser);
      userNameInputValueUser = usernameInput.value.trim();
      // need do something so it become an value not a promise
      getFetchDataForUser = await gitfetch(userNameInputValueUser);
      //console.log("for user1",getFetchDataForUser);
      imageForUser = getFetchDataForUser.avatar_url;
      //console.log("imagelog",imageForUser);
      printData(dataPrintBase,getFetchDataForUser,sellectionOpt,imageForUser,card1);
  }else { 
    errorlog("User input error(empty||previous name)", 1);
  }
}
async function searchBtn2() {
//   console.log(userNameInputValueUser2);
  if (usernameInput2.value!="" && userNameInputValueUser2!=usernameInput2.value.trim()) {
    // console.log("it is not empty user input 2");
    // console.log(userNameInputValueUser2);
    userNameInputValueUser2=usernameInput2.value.trim();
    getFetchDataForUser2 = await gitfetch(userNameInputValueUser2);
     // console.log("for user 2",getFetchDataForUser2);
    imageForUser2 = getFetchDataForUser2.avatar_url;
   //  console.log("imagebase",imageForUser2);
    printData(dataPrintBase2,getFetchDataForUser2,sellectionOpt2,imageForUser2,card2);

  } else {
    errorlog("User input error(empty||previous name)",2);
  }
}

//! 4 - PrintFunc
function printData(dataprintbaseinput , getFetchDataForUserInput , sellectionOptInput , imageinput , cardinput ) {
  printImage(cardinput , imageinput);
  const paratemp = document.createElement("p");
  if (sellectionOptInput.value === "followers") {
    console.log("followers");
    dataprintbaseinput.innerHTML = "";
    paratemp.textContent = `Followers-${getFetchDataForUserInput.followers}`;
    dataprintbaseinput.appendChild(paratemp);
  } else if (sellectionOptInput.value === "following") {
    console.log("following");
    dataprintbaseinput.innerHTML = "";
    paratemp.textContent = `Following-${getFetchDataForUserInput.following}`;
    dataprintbaseinput.appendChild(paratemp);
  } else if (sellectionOptInput.value === "location") {
    console.log("location");
    dataprintbaseinput.innerHTML = "";
    paratemp.textContent = `Location-${getFetchDataForUserInput.location}`;
    dataprintbaseinput.appendChild(paratemp);
  } else if (sellectionOptInput.value === "name") {
    console.log("name");
    dataprintbaseinput.innerHTML = "";
    paratemp.textContent = `Name-${getFetchDataForUserInput.name}`;
    dataprintbaseinput.appendChild(paratemp);
  } else if (sellectionOptInput.value === "public_repos") {
    dataprintbaseinput.innerHTML = "";
    paratemp.textContent = `Public_repos-${getFetchDataForUserInput.public_repos}`;
    dataprintbaseinput.appendChild(paratemp);
  } else if (sellectionOptInput.value === "created_at") {
    dataprintbaseinput.innerHTML = "";
    paratemp.textContent = `Created_at-${getFetchDataForUserInput.created_at}`;
    dataprintbaseinput.appendChild(paratemp);
  } else if (sellectionOptInput.value === "updated_at") {
    dataprintbaseinput.innerHTML = "";
    paratemp.textContent = `Updated_at-${getFetchDataForUserInput.created_at}`;
    dataprintbaseinput.appendChild(paratemp);
  } else {
    console.log("all");
    dataprintbaseinput.innerHTML = "";
    for (let i = 0; i < options.length; i++) {
      let temppera = document.createElement("p");
      temppera.textContent = `${fistoneupper(options[i])}-${getFetchDataForUserInput[options[i]]}`;
      dataprintbaseinput.appendChild(temppera);
    }
  }
}

// ! opc print
sellectionOpt.addEventListener("change",()=>{ 
    console.log("sellectopt 1 is working");
    if (userNameInputValueUser!="") { 
         printData(dataPrintBase,getFetchDataForUser , sellectionOpt,imageForUser,card1);
    }

});
sellectionOpt2.addEventListener("change",()=>{ 
    console.log("sellectionOpt2 is running");
    if (userNameInputValueUser2!="") {
         printData(dataPrintBase2,getFetchDataForUser2 , sellectionOpt2,imageForUser2,card2);
    }

});





//! 4 toupperfist
function fistoneupper(userGivevalue) {
  return userGivevalue[0].toUpperCase() + userGivevalue.slice(1);
}

//! 5 error log console 
function errorlog(error,output) { 
    if (output === 1) { 
    para.textContent = `Warning-${error}`;
    para.style.color = "red";
    dataPrintBase.appendChild(para);

    }else if (output === 2)  { 
    para.textContent = `Warning-${error}`;
    para.style.color = "red";
    dataPrintBase2.appendChild(para);

    }else { 

    }
   
}

//! print image 

function printImage (container , inputimage) { 
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = inputimage;
    img.alt = "GitHub profile picture";  
    img.style.width = "500px";   // note: a string, with the unit'
    img.style.height = "500px";
    container.appendChild(img);
    

}

