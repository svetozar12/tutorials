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

const func = async () => {
  //   const A = await myPromiseA;
  //   const B = await myPromiseB;
  //   const C = await myPromiseC;
  //   console.log(A, B, C);
  Promise.all([myPromiseA, myPromiseB, myPromiseC]).then((val) => {
    let logString = "";
    val.forEach((element) => {
      logString += ` ${element}`;
    });
    console.log(logString);
  });

  //   myPromiseA.then((elA) => {
  //     myPromiseB.then((elB) => {
  //       myPromiseC.then((elC) => {
  //         console.log(elA, elB, elC);
  //       });
  //     });
  //   });
};

func();
