console.log("welcome!");

const url = "https://official-joke-api.appspot.com/jokes/random";

const p = document.getElementById("para");
const btn = document.getElementById("btn");
let result;
async function jokeapi() {
  const promise = await fetch(url);
  result = await promise.json();
  console.log(result);

  p.textContent = `${result.setup}`;
  punchline.innerHTML = "";
  // console.log(result);
}

btn.addEventListener("click", jokeapi);
jokeapi();

const btnPunch = document.getElementById("btnPunch");
const punchline = document.getElementById("punchline");
btnPunch.addEventListener("click", () => {
  // const newPara = document.createElement("p");
  // newPara.textContent = `${result.punchline}`;
  // console.log(newPara);
  punchline.innerHTML = `${result.punchline}`;
});
