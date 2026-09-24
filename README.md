# GitAuraBattle

> **Learning Project #1**: built to learn `fetch`, `async/await`, Promises and error handling in JavaScript.
> It took **2 days** to learn and build.

Enter two GitHub usernames, pull their profiles from the GitHub API and start an **aura battle**. The user with more aura wins and gets worshipped on the winner screen 🙇


<img width="1016" height="978" alt="Screenshot 2026-09-24 at 11 46 14 AM" src="https://github.com/user-attachments/assets/51bcc8f3-f9e3-43e5-95d7-805bf63ea151" />

<img width="982" height="950" alt="Screenshot 2026-09-24 at 11 47 00 AM" src="https://github.com/user-attachments/assets/fab0ee81-7392-4da1-a3c3-668ff11be251" />

<img width="1141" height="859" alt="Screenshot 2026-09-24 at 11 49 46 AM" src="https://github.com/user-attachments/assets/49cfe37e-f77e-4d1e-a48c-aaed10214f57" />

<img width="1317" height="868" alt="Screenshot 2026-09-24 at 11 47 49 AM" src="https://github.com/user-attachments/assets/aa58dc7b-dbf3-41a9-83d7-afdb14b220f4" />




---

## How it works

1. Type a GitHub username for **Fighter 1** and **Fighter 2**
2. Hit **Search** in each console to fetch their profile
3. Use the dropdown to choose which info to show (followers, repos, location…)
4. Hit **Start aura battle**
5. A fight animation plays for 3 seconds, then the winner screen appears
6. The page resets itself after a **10-second countdown**

### Aura formula

```
aura = (public_repos × 4) + (followers × 2) − following
```

Higher aura wins. If the scores are equal, it's a draw.

---

## What I learned

### 1. `fetch()`: asking a server for data
`fetch` sends a request to a URL (here, `https://api.github.com/users/<name>`) and gives back a **Promise**, not the data itself.

### 2. Promises
A Promise is a "box" that will hold a value **later**. It has 3 states:
- **pending**: still waiting
- **fulfilled**: the data arrived
- **rejected**: something went wrong

### 3. `async` / `await`
`await` pauses the function until the Promise finishes, so async code reads like normal top-to-bottom code:

```js
async function gitfetch(username) {
  const res = await fetch(`https://api.github.com/users/${username}`); // wait for response
  if (res.status === 404) throw new Error("User Not Found");
  return res.json(); // .json() is ALSO a promise
}
```

An `async` function **always** returns a Promise, even if you return a plain value.

### 4. Response status codes
| Code | Meaning |
|------|---------|
| 200 | OK, user found |
| 404 | User not found |
| 403 | Too many requests (GitHub allows 60 per hour without a login) |

`res.ok` is `true` for any code from 200 to 299.

### 5. `throw new Error()` + `try / catch / finally`
- `throw` stops the function and sends the error up to the nearest `catch`
- `catch (err)` receives it, and `err.message` holds the text
- `finally` **always** runs, which is useful for hiding loaders

### 6. DOM manipulation
- `document.getElementById()` finds elements
- `createElement()` + `appendChild()` build new elements
- `.textContent` sets text on divs/p tags, and `.value` works on inputs/selects
- `classList.add/remove('hidden')` shows and hides overlays

### 7. Timers
- `setTimeout(fn, 3000)` runs code **once** after 3 seconds (the fight animation)
- `setInterval(fn, 1000)` runs code **every** second (the countdown)
- `clearInterval(id)` stops an interval
- `location.reload()` refreshes the page

### 8. Events
`addEventListener("change", ...)` re-prints the data when the dropdown changes.

---

## Project structure

```
githubfech/
├── DevDoc/
│   ├── base.md       # dev notes
│   └── ui.png        # UI screenshot
├── Main/
│   ├── index.html    # layout, styles, overlays
│   └── main.js       # all the logic
├── LICENSE
└── README.md
```

---

## Run it

No install needed. Open `Main/index.html` with **Live Server** in VS Code, or any local server.

---

## Known limits (things to improve next)

- The search buttons have no `try/catch` yet, so a wrong username keeps the loader on screen
- GitHub limits requests to 60 per hour without an API token
- The aura formula is just for fun, not a real measure of skill 😄

---

## Author

Made for learning by **EKANSH-VCPKG**
[x.com/ekanshvcpkg](https://x.com/ekanshvcpkg) · [GitHub repo](https://github.com/ekanshvcpkg/github-fetcher)
