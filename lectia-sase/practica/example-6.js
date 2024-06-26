/*

## Example 6 - Operation rest

Write a `transformUsername(user)` function to return a new object
with `fullName` property instead of `firstName` and `lastName`.

```js
*/

function transformUsername(arg) {
  const { firstName, lastName, ...otherProps } = arg;
  fullName = `${firstName} ${lastName}`;

  return {
    fullName,
    ...otherProps,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: "Adrian",
    lastName: "Cross",
    email: "a.cross@hotmail.com",
    friendCount: 20,
  })
);
