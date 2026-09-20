
 console.log("running main.js");
 // ! 1 - need to get all the var 
const usernameInput = document.getElementById('username');
const searchButton = document.getElementById('searchBtn');
const sellectionOpt = document.getElementById('view');
const dataPrintBase = document.getElementById('output');

 // console.log(sellectionOpt[3]); this works



let userNameInputValue = "";
let getFetchData = {}; // obj

const para = document.createElement('p');





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
    userNameInputValue = usernameInput.value.trim();
    // need do something so it become an value not a promise  
    getFetchData = await gitfetch(userNameInputValue);  
    console.log(getFetchData);
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
        console.log("repos");
        dataPrintBase.innerHTML = "";
        para.textContent = `Followers-${getFetchData.repos}`
        dataPrintBase.appendChild(para);

    }else if (sellectionOpt.value ==="name") { 
        console.log("name");
        dataPrintBase.innerHTML = "";
        para.textContent = `Name-${getFetchData.name}`
        dataPrintBase.appendChild(para);

    }else { 
        console.log("all");
        dataPrintBase.innerHTML = "";
        para.textContent = `All-${getFetchData}`
        dataPrintBase.appendChild(para);
    }
}



