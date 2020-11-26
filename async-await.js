// async-await

const random = () => {
  return Promise.resolve(Math.random());
};

/**
 * Bad Promise Code
 */
// const sumRandomAsyncNumbers = () => {
//     let first;
//     let second;
//     let third;

//     return random()
//         .then(v => {
//             first = v;
//             return random()
//         })
//         .then(v => {
//             second = v;
//             return random();
//         })
//         .then(v => {
//             third = v;
//             return first + second + third
//         })
// }

/**
 * Good Promise Code
 */
const sumRandomAsyncNumbers = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result ${first} + ${second} + ${third}`);
};

sumRandomAsyncNumbers();
