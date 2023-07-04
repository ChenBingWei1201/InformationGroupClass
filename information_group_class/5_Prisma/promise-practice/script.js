// promise
const myDisplay = (some) => {
  document.getElementById("demo").innerHTML = some;
}

const myPromise = new Promise(function(resolve, reject) {
    let x = 0;

    if (x === 0)
      resolve("ok");
    else
      reject("fail");
  })

// myFunction is a Promise object!!!
myPromise.then(
  function(value) {myDisplay(value);},
  function(error) {myDisplay(error);}
)


/* async only */
const myFunction = async () => {
  return "Hello";
}

// myFunction is a Promise object function!!!
myFunction().then(
  function(value) {myDisplay(value);},
  function(error) {myDisplay(error);}
)


/* async & await */
const display = async () => {
  let myPromise = new Promise(function(resolve) {
    setTimeout(() => resolve("I love you"), 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

display();

