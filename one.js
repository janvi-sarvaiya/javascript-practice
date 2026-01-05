// Array Filtering and Transformation:
const users = [
  { name: "John", isActive: true },
  { name: "Jane", isActive: false },
  { name: "Tom", isActive: true },
  { name: "Sara", isActive: false },
];
function isActiveUsers(arr) {
  return arr.filter((val) => {
    if (val.isActive) {
      return val;
    }
  });
}
console.log(isActiveUsers(users));

// Array of Numbers - Summing Odd Numbers:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOddNumber = numbers.reduce((acc, cur) => {
  if (cur % 2 != 0) {
    return acc + cur;
  }
  return acc;
});
console.log(sumOddNumber);

// Removing Duplicates from Array:
const arr = [1, 2, 3, 4, 5, 1, 6, 7, 2];
const removeDuplicate = [...new Set(arr)];
console.log(removeDuplicate);

// Array of Objects - Sorting by Property:
const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 10 },
  { name: "Product C", price: 20 },
];

const sortPrice = products.sort((a, b) => a.price - b.price);
console.log(sortPrice);

// Array.reduce() to Group by Property:
const user = [
  { name: "John", city: "New York" },
  { name: "Jane", city: "San Francisco" },
  { name: "Tom", city: "New York" },
  { name: "Sara", city: "Chicago" },
];

function groupByCity(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc[cur.city]) {
      acc[cur.city] = [];
    }
    acc[cur.city].push(cur);
    return acc;
  }, {});
}
console.log(groupByCity(user));

// Array.find() to Find Object by Property:
const users1 = [
  { name: "John", email: "john@example.com" },
  { name: "Jane", email: "jane@example.com" },
  { name: "Tom", email: "tom@example.com" },
];

function findEmail(email) {
  return users1.find((val) => {
    if (val.email === email) {
      console.log(val);
    }
  });
}
findEmail("jane@example.com");

// Object Destructuring:
const product = { name: "Laptop", price: 1200, category: "Electronics" };
console.log(`The product is ${product.name} and costs ${product.price}`);

// Given an array of strings, write a function that uses map() to convert each string into an object with two properties: the original string and its length.
const words = ["apple", "banana", "cherry", "date"];
function mapToWordInfo(word) {
  return word.map((val) => ({
    string: val,
    length: val.length,
  }));
}
console.log(mapToWordInfo(words));

// You have two objects: one containing user data and another containing settings.
//  Write a function that merges these two objects into a single object.
//   If a key exists in both objects, the value from the settings object should overwrite the value from the user object.
const userData = { name: "John", age: 25, location: "New York" };
const userSettings = { location: "San Francisco", theme: "dark" };

function mergeUserData(userData, userSettings) {
  return Object.assign({}, userData, userSettings);
  // return {
  //   ...userData,
  //   ...userSettings,
  // };
}
console.log(mergeUserData(userData, userSettings));

// checks if any product in an array of products has a price greater than a given threshold.
// If yes, return the name of the first product that exceeds the threshold
const products1 = [
  { name: "Laptop", price: 111 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
];
function findExpensiveProduct(products, priceThreshold) {
  return products.find((val) => val.price >= priceThreshold).name;
  // return findPrice ? findPrice.name : "not found";
}
console.log(
  "first expensive product => ",
  findExpensiveProduct(products1, 200)
);

//1 year
// Filter out all numbers that are divisible by 3.Then, square each remaining number.
const number1 = [1, 3, 4, 6, 8, 9, 12, 15, 18];
function transformNumbers(number) {
  return number.filter((el) => el % 3 === 0).map((el) => el * el);
}
console.log(transformNumbers(number1));

// calculates the total balance, considering "income" as positive and "expense" as negative
const transactions = [
  { type: "income", amount: 500 },
  { type: "expense", amount: 200 },
  { type: "income", amount: -300 },
  { type: "expense", amount: 50 },
];

function calculateBalance(arr) {
  const calculates = arr.reduce((acc, cur) => {
    if (cur.type == "income" && cur.amount > 0) {
      return acc + cur.amount;
    }
    if (cur.type == "expense") {
      return acc - cur.amount;
    }
    return acc;
  }, 0);
  return calculates;
}
console.log("income - expense => ", calculateBalance(transactions));

// If any product is out of stock, return true. Otherwise, return false.
const stock = [
  { name: "Laptop", quantity: 5 },
  { name: "Phone", quantity: 0 },
  { name: "Headphones", quantity: 10 },
];

const isAnyOutOfStock = (arr) => arr.some(({ quantity }) => quantity <= 0);
console.log("out of stock => ", isAnyOutOfStock(stock));

// Write a function that waits for all of them to finish and then logs the results.
function fetchUserData() {
  return new Promise((resolve) => setTimeout(() => resolve("User Data"), 1000));
}

function postUserData() {
  return new Promise((resolve) => setTimeout(() => resolve("Post Data"), 1500));
}

function getComments() {
  return new Promise((resolve) => setTimeout(() => resolve("Comments"), 2000));
}

const fetchData = () => {
  return Promise.all([fetchUserData(), postUserData(), getComments()])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
fetchData();

// Write a function that filters out all even numbers, doubles the odd ones, and then sums them up.
const num = [1, 2, 3, 4, 5, 6, 7, 8];
const sumEvenNumber = (arr) => {
  return arr
    .filter((val) => val % 2 != 0)
    .map((val) => val * 2)
    .reduce((acc, cur) => acc + cur);
};
console.log("odd, double and sum => ", sumEvenNumber(num));

// Write a function that returns the longest word in the array.
const word = ["apple", "banana", "orange", "grape", "strawbary"];
const longWord = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  });
};

console.log("longest word = ", longWord(word));

// updates their age and city. If a property doesn't exist, create it.
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

const updatePerson = (obj, newObj) => Object.assign({}, obj, newObj);

console.log(
  "update object = ",
  updatePerson(person, { age: 31, city: "Los Angeles", country: "USA" })
);
// we can update the object with new value and if property doesn't exist then add new property using Object.assign()

// Write a function to find the user with the highest id.
const array = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 5, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];
const highestId = (arr) => {
  return arr.sort((a, b) => b.id - a.id).find((val) => val);
};
console.log("highest id = ", highestId(array));

// Write a function processNumbers that accepts the array and the callback, and returns a new array of the processed numbers.
const numb = [1, 2, 3, 4, 5];
const double = (num) => num * 2;
const processNumbers = (num, double) => {
  return num.map((val) => double(val));
};

console.log(processNumbers(numb, double));

// The callback should filter users that are above a certain age threshold.
const users2 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Tom", age: 15 },
];
const isAdult = (user) => user.age >= 18;
const filterUsersByAge = (user, callback) => {
  return user.filter((val) => callback(val));
};

console.log(filterUsersByAge(users2, isAdult));

// Write a function to count how many times each category appears in the array.
const items = [
  { name: "Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Apple", category: "Food" },
  { name: "Banana", category: "Food" },
  { name: "Socks", category: "Clothing" },
];

const countCategories = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc[cur.category]) {
      acc[cur.category]++;
    } else {
      acc[cur.category] = 1;
    }
    return acc;
  }, {});
};
console.log(countCategories(items));

// Write a function to update the salary of a specific employee by their name.
const employees = [
  { name: "Alice", salary: 50000, department: "HR" },
  { name: "Bob", salary: 60000, department: "Engineering" },
  { name: "Charlie", salary: 55000, department: "Engineering" },
];
const updateSalary = (emp, empName, newSalary) => {
  return emp.map((val) => {
    if (empName == val.name) {
      return {
        ...val,
        salary: newSalary,
      };
    }
    return val;
  });
};
console.log(updateSalary(employees, "Charlie", 1000));

// Write a function to transform orders with price calculation
const orders = [
  { id: 1, product: "Laptop", quantity: 2 },
  { id: 2, product: "Phone", quantity: 1 },
  { id: 3, product: "Tablet", quantity: 3 },
];

const transformOrders = (arr) => {
  const prices = { Laptop: 1000, Phone: 700, Tablet: 400 };
  return arr.map((val) => {
    return {
      ...val,
      totalPrice: val.quantity * prices[val.product],
    };
  });
};
console.log(transformOrders(orders));

// Write a function to find the most common eventType.
const events = [
  { eventType: "Conference", location: "New York" },
  { eventType: "Workshop", location: "Los Angeles" },
  { eventType: "Conference", location: "San Francisco" },
  { eventType: "Seminar", location: "Chicago" },
  { eventType: "Conference", location: "Boston" },
];

const mostFrequentEventType = (arr) => {
  const findMaxword = arr.reduce((acc, cur) => {
    acc[cur.eventType] = (acc[cur.eventType] || 0) + 1;
    return acc;
  }, {});

  let mostFrequent = "";
  let mostCount = 0;
  for (let i in findMaxword) {
    if (findMaxword[i] > mostCount) {
      mostCount = findMaxword[i];
      mostFrequent = i;
    }
  }
  return mostFrequent;
};
console.log("most frequent event type = ", mostFrequentEventType(events));

// change positive → negative, negative → positive
const a = [1, -2, -3, 4, 5];
const changeSign = () => {
  return a.map((val) => -val);
};
console.log(changeSign());

const gender = [
  { name: "devid", gender: "male" },
  { name: "riya", gender: "male" },
  { name: "xyz", gender: "male" },
  { name: "amelia", gender: "male" },
  { name: "devid", gender: "male" },
];

const checkGender = (gender) => {
  return (
    gender.every((val) => val.gender == "female") ||
    gender.every((val) => val.gender == "male")
  );
};
console.log("all female or male: ", checkGender(gender));
