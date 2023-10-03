/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair<value> {
//   [key: symbol | string]: value;
// }
// const test: KeyValuePair<any> = {
//   key: "value",
//   keys: 12314,
// };

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const test: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

export {};
