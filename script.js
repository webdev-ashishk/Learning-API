const promise = fetch("https://jsonplaceholder.typicode.com/comments");
promise
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json(); //You must write return here!
  })
  .then((result) => {
    console.log(result);
  });
