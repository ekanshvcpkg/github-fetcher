
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

async function demon() {
    let dex = await 7;
     return dex;
}

demon();
console.log("C");

