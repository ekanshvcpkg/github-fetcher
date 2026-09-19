function Dbug (log) {
    console.log("DLOG-"+log);
}

function Dbugtype(log) { 
    console.log("DLOG(TYPE)-"+typeof(log));
}

const result = fetch("https://api.github.com/users/torvalds"); // ! fetch don't open a brow 
// !it goes straight to the network itself: it finds GitHub's server address, opens a connection, sends the request, and receives the text of the reply
// result.then(sol=>console.log(Dbugtype(sol))); // this is giving me object 
// i need name and followers

 // result.then(sol=>console.log(sol.body)); 
// this is giving me the obj ReadableStream { locked: false, state: 'readable', supportsBYOB: true }
// with the name of it i can see that there is something name readable mean i can read it i am not sure how to get the main body of it 



// rn i am thing to do sol and then in there i can find some thing which i can open like a value so i can give the key so i can open 
 // result.then(sol=>console.log(sol)); //   body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true }, i think this i need the body  from body i think i need something like ReadableStream i think i am not sure let's try 
result.then(sol=>sol.json().then(val=>console.log(`${val.name}|Followers:${val.followers}`))); // pending ok. i need the value i think i can get it by then 
/*1. fetch(url)
     Sends the request to GitHub and returns a PROMISE right away.
     JS doesn't wait; the network work happens in the background.

  2. result.then(sol => ...)
     The promise resolves as soon as the HEADERS arrive
     (status 200, content-type, etc.), NOT the whole body.
     sol = Response object = the envelope.
     sol.body = a stream: raw BYTES, still arriving in chunks.

  3. sol.json()
     Does 3 jobs: reads ALL the byte chunks from the stream,
     decodes the bytes into text (UTF-8): '{"name":"Linus Torvalds",...}',
     and parses that text into a real JS object (like JSON.parse).
     Returns a PROMISE because the bytes may still be arriving.

  4. .then(val => ...)
     Runs once parsing is done.
     val = a normal JS object, so val.name and val.followers work.

  So: bytes → text → JS object.
  Two waits, two promises: one for the headers (fetch), one for the body (.json).
*/




