
 console.log("running main.js");
 // ! 1 - need to get all the var 
const usernameInput = document.getElementById('username');
const usernameInput2 = document.getElementById('username2');
const searchButton = document.getElementById('searchBtn');
const sellectionOpt = document.getElementById('view');
const dataPrintBase = document.getElementById('output');

 // console.log(sellectionOpt[3]); this works

let userNameInputValueUser1 = "";
let userNameInputValueUser2 = "";
let getFetchDataForUser1 = {}; // obj
let getFetchDataForUser2 = {}; // obj


const para = document.createElement('p');

const options = ["name" , "followers" , "following" , "location","public_repos","created_at","updated_at"];

const textNode  = document.createElement('p');

//! 2 - fetch data 
async function gitfetch(username) {
    const result = fetch(`https://api.github.com/users/${username}`);
    // now i will get the unclean obj
    const unCleanObj = await result;
    return unCleanObj.json(); // async will make it a promise box even if we use await
}
//! 3 - SearchBtn
async function searchBtn() { 
    // ? run only when the user has new name 
    if (usernameInput) { 
            userNameInputValue = usernameInput.value.trim();
    // need do something so it become an value not a promise  
    getFetchData = await gitfetch(userNameInputValue);  
    console.log(getFetchData);
    }

    printData();
}

//! 4 - PrintFunc
function printData () { 
    if (sellectionOpt.value ==="followers") { 
        console.log("followers");
        dataPrintBase.innerHTML = "";
        para.textContent = `Followers-${getFetchData.followers}`
        dataPrintBase.appendChild(para);

    }else if (sellectionOpt.value ==="following" ) { 
        console.log("following");
        dataPrintBase.innerHTML = "";
        para.textContent = `Following-${getFetchData.following}`
        dataPrintBase.appendChild(para);

    }else if (sellectionOpt.value ==="repos") { 
        console.log("location");
        dataPrintBase.innerHTML = "";
        para.textContent = `Location-${getFetchData.location}`
        dataPrintBase.appendChild(para);

    }else if (sellectionOpt.value ==="name") { 
        console.log("name");
        dataPrintBase.innerHTML = "";
        para.textContent = `Name-${getFetchData.name}`
        dataPrintBase.appendChild(para);

    }else if (sellectionOpt.value ==="public_repos") { 
        dataPrintBase.innerHTML = "";
        para.textContent = `Public_repos-${getFetchData.public_repos}`
        dataPrintBase.appendChild(para);

    }else if (sellectionOpt.value ==="created_at") { 
        dataPrintBase.innerHTML = "";
        para.textContent = `Created_at-${getFetchData.created_at}`
        dataPrintBase.appendChild(para);

    }else if (sellectionOpt.value ==="updated_at") { 
        dataPrintBase.innerHTML = "";
        para.textContent = `Updated_at-${getFetchData.created_at}`
        dataPrintBase.appendChild(para);
    }
    else { 
        console.log("all");
        dataPrintBase.innerHTML = "";
        for (let i = 0; i<options.length; i++) { 
            let temppera = document.createElement('p');
            temppera.textContent = `${fistoneupper(options[i])}-${getFetchData[options[i]]}`
            dataPrintBase.appendChild(temppera);

        }
    }
}


//! 4 toupperfist
function fistoneupper(userGivevalue) { 
    return userGivevalue[0].toUpperCase() + userGivevalue.slice(1);
}




