const myPromiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 300);
});

const myPromiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("dorm");
  }, 300);
});

const myPromiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

const init = async () => {
  // es6
  //   Promise.all([myPromiseA, myPromiseB, myPromiseC]).then((result) => {
  //     console.log(result);
  //     let logString = "";
  //     result.forEach((element) => {
  //       logString += ` ${element}`;
  //     });
  //     console.log(logString);
  //   });
  // async solution es7
  const valA = await myPromiseA;
  const valB = await myPromiseB;
  const valC = await myPromiseC;
  console.log(valA, valB, valC);
  //  Callback hell
  //   myPromiseA.then((valA) => {
  //     myPromiseB.then((valB) => {
  //       myPromiseC.then((valC) => {
  //         console.log(valA, valB, valC);
  //       });
  //     });
  //   });
};

init();
