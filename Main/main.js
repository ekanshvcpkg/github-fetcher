 console.log("running main.js");
 // 1 - need to get all the var 
const usernameInput = document.getElementById('username');
const searchButton = document.getElementById('searchBtn');
const returnValue = document.getElementById('view');

let userNameInputValue = "";



async function gitfetch(username) {

    const result = fetch(`https://api.github.com/users/${username}`);
    // now i will get the unclean obj
    const unCleanObj = await result;
    return unCleanObj.json(); // async will make it a promise box even if we use await
}

function searchBtn() { 
    userNameInputValue = usernameInput.value.trim();
    // need do something so it become an value not a promise  
    console.log(gitfetch(userNameInputValue));   
}
