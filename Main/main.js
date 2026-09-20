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
    const CleanObj = await unCleanObj.json();  // this  will give me the obj that i got from the promice it is same as then ok 
    console.log(CleanObj);
    return CleanObj;// now i am returning that same obj but then i try to print it in this like 
}

function searchBtn() { 
    userNameInputValue = usernameInput.value.trim();
    console.log(gitfetch(userNameInputValue)); // 
  
}
