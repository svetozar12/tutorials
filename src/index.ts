// TYPES;
// let numVar = 1;
// let stringVar = "Hello";
// let arrStringVar = [1, 2, 3];
// let stringArrVar = ["😀", "🥶", "💩"];
// let objectVar = { username: "SexyNinja💩" };
// let objectArrVar = [{ username: "SexyNinja💩" }, { username: "AngryCat😀" }];

// INTERFACES;
// interface IObject {
//   username: string;
//   age: number;
// }

// const user: IObject = { username: "jhonh", age: 12 };
// const users: IObject[] = [
//   { username: "jhonh", age: 12 },
//   { username: "Rob", age: 22 },
// ];

// UNIOS;
// type MyType = string | number;

// const variable: MyType = "Alex";

// GENERICS;
// const LastItem = <T>(arr: T[]) => {
//   return arr[arr.length - 1];
// };

// const arrEl1 = LastItem(["😀", "🥶", "💩"]);
// const arrEl2 = LastItem([
//   { username: "SexyNinja💩", age: 10 },
//   { username: "AngryCat😀", age: 31 },
// ]);

// console.log(arrEl2);

// interface IGeneric<T, U> {
//   username: T;
//   age: U;
// }

// const user: IGeneric<string, number> = { username: "jhonh", age: 12 };
