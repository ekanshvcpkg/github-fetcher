
// async function demon () {
//     let dex = await 7; // give me the promise value i think 
//     console.log(dex); // when i run something like this it print promise pending
//     return await 5;  // this is giving 
//     // why the f is this man why this is not giving me 7 then promise pending wtf 
//     // it is not running the console.log 7 it is running the demon() console and then it 
//     // it is running something inside it 
//     // why is that i am not able to understand man 

// }

//  console.log(demon());



/* 
1- when we call demon 
2 - now we are in demon
3 - now dex = await 5 mean that this is a promise and it will take some thing some thing like promise.then() ok. when we got the promise 
4- then run then and give me the value that is the use of await 
5 - fist time it see promise and do promise pending and print that in the console - that is 




*/

// async function demon() {
//     let dex = await 7;
//     // console.log(dex); // this will give me the value 7 cause it will run after the it has the value of 7 
//     return dex; 
// }

// demon().then(m =>console.log(m)); // this will give me pending promise ok. 
// but i neeed the value inside the promice what i think it is doing is it is running the console log outside and thing run is is not there the value 
// so pending to fix it i can use console.log inside the demon some thing like


// but now the problem is that i need 7 and value not the obj ok 
//demon().then(m =>console.log(m)) using this i am able to get the value but is that the only methold ?? 


const user = { followers: 50, key: "surprise!" };
const key = "followers";

console.log(user.key); // got this 
console.log(user[key]);// wtf is that bro why it is printing 50 man wtf ? 
// key = followers so it is a key ok. 
// user.followers is that igt is doing ? cause in know that if you want to add a key value pare in some obj you do 
// user[key] = value;