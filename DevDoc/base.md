# what i learned making GITAURAbattle

## 1 - fetch and what it actually gives back

fetch doesn't open a browser window or anything. it goes straight to the network: finds github's server address, opens a connection, sends the request and gets the reply back.

first i did this:

// result.then(sol => console.log(sol));

this gave me an object. i needed name and followers from it but they weren't there directly. then i tried:

// result.then(sol => console.log(sol.body));

and got this: ReadableStream { locked: false, state: 'readable', supportsBYOB: true }

from the name i could tell it's something i can "read" but i wasn't sure how to get the actual data out of it. after some trying this worked:

// result.then(sol => sol.json().then(val => console.log(`${val.name} | Followers: ${val.followers}`)));

so here is what's happening step by step:

1. fetch(url)
   sends the request to github and gives back a promise right away.
   js doesn't wait, the network stuff happens in the background.

2. result.then(sol => ...)
   the promise resolves as soon as the headers come in (status 200, content-type etc), not the whole body.
   sol = the Response object, basically the envelope.
   sol.body = a stream, raw bytes still coming in chunks.

3. sol.json()
   does 3 things:
   - reads all the byte chunks from the stream
   - turns the bytes into text (utf-8) like '{"name":"Linus Torvalds",...}'
   - parses that text into a real js object (same as JSON.parse)
   it returns a promise too because the bytes might still be arriving.

4. .then(val => ...)
   runs when parsing is done. val is a normal js object so val.name and val.followers work.

so basically: bytes → text → js object
two waits, two promises. one for the headers (fetch) and one for the body (.json)

## 2 - async/await and the "promise pending" thing

async function gitfetch(username) {
    const result = fetch(`https://api.github.com/users/${username}`);
    const unCleanObj = await result;              // the response (envelope)
    const cleanObj = await unCleanObj.json();     // same as doing .then
    console.log(cleanObj);                        // this prints the real object
    return cleanObj;
}

console.log(gitfetch(userNameInputValue)); // this gives Promise { <pending> }

this confused me. inside the function console.log gives me the real object but outside it gives promise pending. why??

the reason: an async function ALWAYS returns a promise, even if you return a normal object. inside the function await waits for the data so it's ready. but outside nothing is waiting, so you just get the promise that's still pending.

fix is to wait outside too:

// gitfetch(name).then(obj => console.log(obj));
// or inside another async function:  const obj = await gitfetch(name);

## 3 - making my own promise

learned how to make a promise myself with new Promise((resolve, reject) => ...). didn't use it in this project but it helped me get what a promise really is.

## 4 - putting images in the dom

figured out how to add an image to the page with js (make an img, set the src to the avatar url, add it to the card).

## 5 - more on .json()

did some more research on what .json() is really doing. the core idea: the response comes as bytes, we await it, and .json() takes the body out of those bytes and turns it into a js object so we can work with it. there's a lot more to it but this is the base level idea.

## 6 - async / await

after all this i have a good idea of how async and await work.

## 7 - who does the fetch

in the browser fetch is a browser api, the browser does the network request for your page (that's why CORS is a thing). in node (v18+) fetch is built into node itself and it uses your os network directly, no browser involved. my project runs in the browser so here the browser is doing it.

## 8 - about the code

i know it doesn't follow the DRY principle and stuff. i made this in like 5 hours while learning everything at the same time. i'll optimise it and make it better later, but right now i'm moving on to backend lol so no new project for a bit.