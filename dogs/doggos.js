const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// fetch is the new way to make ajax requests
const promise = fetch(DOG_URL);
const doggos = document.querySelector(".doggos");

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "cute doggo";
    doggos.appendChild(img);
  });

console.log("this will log first");
