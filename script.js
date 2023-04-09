console.log("how!");

const url =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,sexist,explicit";

const p = document.getElementById("para");
const btn = document.getElementById("btn");
async function jokeapi() {
  const promise = await fetch(url);
  const result = await promise.json();
  // console.log(result.joke);
  p.textContent = `${result.joke}`;
  // console.log(result);
}

btn.addEventListener("click", jokeapi);
jokeapi();
