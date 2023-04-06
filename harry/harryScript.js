// const promise = fetch("https://jsonplaceholder.typicode.com/comments");
// promise
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(response.headers);
//     return response.json(); //You must write return here!
//   })
//   .then((result) => {
//     console.log(result);
//   });

async function apiCall() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/comments");
  const response = await promise.json();
  console.log(response);
  // document.getElementById("demo").innerHTML = response;
  document.getElementById("userData").innerHTML = response
    .map(
      (user) =>
        `
    <tr>
    <td>${user.name}</td>
    <td>${user.id}</td>
    </tr>
    `
    )
    .join("");
}

apiCall();
