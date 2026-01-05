//example 1
const person = [
  { name: "aira", contact: "4561237581" },
  { name: "xyz", contact: "78574836754" },
  { name: "abc", contact: "458767584" },
  { name: "aaa", contact: "54756768" },
  { name: "shrey", contact: "4353464576" },
];

// const search = document.getElementById("search");
// const button = document.querySelector("button");
// const para = document.getElementById("para");

// button.addEventListener("click", () => {
//   const input = search.value.toLowerCase();
//   search.focus();
//   para.textContent = "";
//   const findPerson = person.filter((val) => {
//     if (val.name === input) {
//       para.innerHTML = val.name + " is number of " + val.contact;
//     } else if (input == "") {
//       para.textContent = "please enter name";
//     } else {
//       para.textContent = "invalid name";
//     }
//     return val;
//   });
//   return findPerson;
// });

// //expample 2
// const list = document.getElementById("list");
// list.textContent = "";
// const item = ["car", "bike", "truck", "cycle"];
// for (let i of item) {
//   if (i) {
//     const li_item = document.createElement("li");
//     li_item.textContent = i;
//     list.appendChild(li_item);
//   }
// }

// // example 3

// const history = document.getElementById("history");
// const historyBtn = document.getElementById("historyBtn");
// const historyList = document.getElementById("historyList");

// historyList.textContent = "";
// const myArr = [];
// const arrlength = 4;

// historyBtn.addEventListener("click", () => {
//   if (history.value !== "") {
//     myArr.unshift(history.value);
//     historyList.textContent = "";

//     for (let list of myArr) {
//       const item = document.createElement("li");
//       item.textContent = list;
//       historyList.appendChild(item);
//     }
//     if (myArr.length >= arrlength) {
//       myArr.pop();
//     }
//     history.value = "";
//   }
// });

console.log(typeof +"45");

let obj = {
  name: {
    fname: "xyz",
  },
  admin() {
    return this.name.fname;
  },
};
let user = {
  age: 24,
};
Object.assign(user, obj);
console.log(user.admin());

// optional chaining
console.log(obj?.["name"]);
console.log(obj?.age);
console.log(obj.admin?.());

//numbers
console.log(1e3 === 1000);
console.log(parseInt("jhgb"));
console.log(isNaN("hjb"));
console.log(isFinite("230"));

// only shown person name whose name not start with a
// person.forEach((val,idx) =>{
//     delete val.contact
//     if(!val.name.startsWith("a")){
//         console.log(val)
//     }
// }

//only take truth value
const data = [NaN, undefined, true, false, 0, 123, "car"];
const data1 = data.filter((val) => {
  return val;
});
console.log(data1);

//update
const checkPerson = person.map((val) => {
  if (val.name.includes("a")) {
    val.contact = 1111111;
  }
  return val;
});
console.log(checkPerson);

const arrData = [1, 2, 3, 4, 5, 6, 7, 8];
const checkPerson1 = arrData.map((val) => {
  if (val % 2 == 0) {
    return val * 2;
  }
  return val;
});

//even value update and odd value as it is
// const checkPerson1 = arrData.map((val) => {
//     return (val%2 ==0) ? val*2 : val
// })

console.log(checkPerson1);

//sort person name
const personSort = person.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
console.log(personSort);

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(3));

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "hhh", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);

// function timer(from,to){
//   let current=from;
//   let timerId = setInterval(() =>{
//     console.log(current);
//     if(current == to ){
//       clearInterval(timerId)
//     }
//     current++;
//   },1000)
// }
// timer(8,15)

// setInterval(() =>{
//   let date = new Date();
//   console.log(date.getHours() + ":" +  date.getMinutes()  + ":" +  date.getSeconds())
// },1000)

// change key in array of object
const user1 = [
  {
    id: 1,
    name: "xyz",
  },
  {
    id: 2,
    name: "abc",
  },
];
const info1 = user1.reduce((acc, val) => {
  acc.push({
    pk: val.id,
    label: val.name,
  });
  return acc;
}, []);
console.log(info1);

const changeKey = user1.map((val) => ({
  pk: val.id,
  label: val.name,
}));

// const changeKey = user1.map((val) => {
//   if(val["id"]){
//     val["pk"] = val["id"]
//     delete val["id"]
//   }
//   return val
// })
console.log(changeKey);

//error handling
function myFun() {
  try {
    let a = +prompt("enter no.", 0);
    if (a < 0) {
      throw new Error("no. is negative");
    }
    console.log(a);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
}

//using callback where addition 2 no.
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
function result(sum) {
  console.log("sum is", sum);
}
add(7, 7, result);

//remove duplicate department in array1
function removeDuplicate(arr) {
  const s = new Set();
  const result = arr.filter((item) => {
    if (!s.has(item.department)) {
      return s.add(item.department);
    }
  });
  return result;
}

const array1 = [
  { id: 1, name: "Alice", department: "Developer" },
  { id: 2, name: "Bob", department: "Developer" },
  { id: 3, name: "Charlie", department: "Tester" },
  { id: 4, name: "David", department: "Tester" },
];
console.log(removeDuplicate(array1));

//sum id where id>2
const sumArray = array1.reduce((acc, cur) => {
  if (cur.id > 2) {
    acc += cur.id;
  }
  return acc;
}, 0);
console.log(sumArray);

//concat array and sort
const arr1 = [1, 3, 5, 7];
const arr4 = [2, 4, 6, 8];

function contactArray(arr1, arr2) {
  const cnt = [...arr1, ...arr2];
  return cnt.sort((a, b) => {
    return a - b;
  });
}
console.log(contactArray(arr1, arr4));

//Write a function that takes an array of numbers and returns a new array where each number that is even is doubled and each number that is odd is squared.
const numbers = [1, 2, 3, 4, 5, 6];
function transform(arr) {
  const result = arr.map((val) => {
    if (val % 2 == 0) {
      return val * 2;
    } else {
      return val * val;
    }
  });
  return result;
}
console.log(transform(numbers));

//Given an array of user objects, write a function that returns the user with the highest age property.
const userData = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
function findLargest(userData) {
  const large = userData.reduce((acc, cur) => {
    return acc > cur.age ? acc : cur;
  });
  return large;
}
console.log(findLargest(userData));

// Write a function that groups an array of objects by multiple properties, returning an object where each key is a combination of those properties.
const role = [
  { name: "Alice", role: "admin", age: 25 },
  { name: "Alice", role: "subadmin", age: 25 },
  { name: "Bob", role: "user", age: 30 },
  { name: "Charlie", role: "admin", age: 25 },
];
const roleWise = role.reduce((acc, cur) => {
  if (!acc[cur.role]) {
    acc[cur.role] = [];
  }
  acc[cur.role].push(cur);
  return acc;
}, []);
console.log(roleWise);

// Write a function that calculates the average of an array of numbers using the .reduce() method.
const number = [5, 10, 15, 20];
const avgArray = number.reduce((acc, cur) => {
  return acc + cur / number.length;
}, 0);
console.log(avgArray);

// Write a function that mimics the behavior of the slice() method but only returns the first N elements of the array, regardless of the array's length.
function sliceArray(arr, n) {
  return arr.slice(0, n);
}
console.log(sliceArray(number, 3));

// reate a Function that Checks if Two Arrays are Equal
// Write a function that checks if two arrays are equal
const a1 = [1, 2, 3];
const a2 = [1, 2, 3];
const a3 = [1, 2, 4];
function checkEquality(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}
console.log(checkEquality(a1, a2));

// write a function that counts how many times each item appears in an array.
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "cherry",
  "cherry",
];
function countOccurrences(arr) {
  const count = arr.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  return count;
}
console.log(countOccurrences(fruits));

const b1 = [1, 2, 3];
const b2 = [3, 4, 5, 4, 6];
function mergeWithoutDuplicates(b1, b2) {
  const merge = [...b1, ...b2];
  return [...new Set(merge)];
}
console.log(mergeWithoutDuplicates(b1, b2));
