//paper set - 1

//answer - 1:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

//using find method
function findUserById(user, id) {
  const findUser = users.find((val) => {
    return val.id === id;
  });
  return findUser;
}
console.log("find by id using find method: ", findUserById(users, 3));

//using reduce method
function findByIdReduce(user, id) {
  const findUser = user.reduce((acc, cur) => {
    if (cur.id === id) {
      return cur;
    }
    return acc;
  });
  return findUser;
}
console.log("find by id using reduce method: ", findByIdReduce(users, 3));

//answer - 2:
const fruits = ["Banana", "Apple", "Cherry", "Date"];

//using sort method
function sortFruits(arr) {
  return arr.sort();
}
console.log(sortFruits(fruits));

//using sort with localeCompare method
function sortFruits1(arr) {
  const sortFruit = arr.sort((a, b) => {
    return a.localeCompare(b);
  });
  return sortFruit;
}
console.log(sortFruits1(fruits));

//answer -3:
const numbers = [5, 10, 15];

//using reduce method
function sumArray(arr) {
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  return sum;
}
console.log("sum using reduce method : ", sumArray(numbers));

//using for of loop
function sumArray1(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}
console.log("sum using For of loop: ", sumArray1(numbers));

//answer - 4:
const keyValuePairs = [
  { key: "name", value: "Alice" },
  { key: "age", value: 30 },
];

//using reduce method
function convertToObject(arr) {
  const keyValue = arr.reduce((acc, cur) => {
    acc[cur.key] = cur.value;
    return acc;
  }, {});
  return keyValue;
}
console.log(
  "convert TO OBJECT using reduce method: ",
  convertToObject(keyValuePairs)
);

//answer - 5 :
const data = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

//using reduce method
function groupByRole(arr) {
  const group = arr.reduce((acc, cur) => {
    if (!acc[cur.role]) {
      acc[cur.role] = [];
    }
    acc[cur.role].push(cur);
    return acc;
  }, {});
  return group;
}
console.log("group by role using reduce method : ", groupByRole(data));

//using ForEach method
function groupByRole1(arr) {
  const newArr = {};
  arr.forEach((val) => {
    if (!newArr[val.role]) {
      newArr[val.role] = [];
    }
    newArr[val.role].push(val);
  });
  return newArr;
}
console.log("group by role using ForEach method : ", groupByRole1(data));

//----------------------------------------------------------------------------------------------

//paper set - 2

//answer - 1:
const user = [{ id: 1 }, { id: 2 }];

//using map method
function addTimestamp(arr) {
  const addTime = arr.map((val) => {
    val.timestamp = new Date();
    return val;
  });
  return addTime;
}
console.log("add timestamp using map method : ", addTimestamp(user));

//using filter method
function addTimestamp1(arr) {
  const addTime = arr.filter((val) => (val.timestamp = new Date()));
  return addTime;
}
console.log("add timestamp using filter method : ", addTimestamp1(user));

//answer - 2:
const data1 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

// using map method
function removeProperty(arr, prop) {
  const removeProp = arr.map((val) => {
    delete val[prop];
    return val;
  });
  return removeProp;
}
console.log(
  "remove property in object using map method  :",
  removeProperty(data1, "age")
);

//using filter method
function removePropertyFilter(arr, prop) {
  const removeProp = arr.filter((val) => {
    delete val[prop];
    return val;
  });
  return removeProp;
}
console.log(
  "remove property in object using filter method  :",
  removePropertyFilter(data1, "age")
);

//answer - 6:

const number = [10, 20, 5, 50, 30];

//using reduce method
function findMax(num) {
  const findNum = num.reduce((acc, cur) => {
    return acc > cur ? acc : cur; //using Math.max(acc, cur) function
  });
  return findNum;
}
console.log(
  "find maximum no. in array using reduce method : ",
  findMax(number)
);

// answer - 4 :
const entries = [
  ["name", "Alice"],
  ["age", 30],
  ["role", "admin"],
];

//using Object.fromEntries methop
function arrayToObject(arr) {
  const obj = Object.fromEntries(arr);
  return obj;
}
console.log(
  "convert array to object using fromEntries method : ",
  arrayToObject(entries)
);

//using reduce method
function arrayToObjectReduce(arr) {
  const obj = arr.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc;
  }, {});
  return obj;
}
console.log(
  "convert array to object using reduce method : ",
  arrayToObjectReduce(entries)
);

//answer - 3 :

const num = [1, 2, 3, 4, 5, 6];

function splitByCondition(arr, callback) {
  const even = arr.filter((val) => callback(val));
  const odd = arr.filter((val) => !callback(val));
  return [even, odd];
}

function myFun(x) {
  return x % 2 == 0;
}
console.log(splitByCondition(num, myFun));

//_________________________________________________________________________

const a = [
  {
    id: 101,
    name: "Smit",
    detail: "31-12-2015 30 years reactJS nodeJs",
  },
  {
    id: 102,
    name: "Vanshika",
    detail: "31-12-2015 30 years reactJs .net",
  },
  {
    id: 103,
    name: "Ashika",
    detail: "15-06-2018 8 years angular nodeJs",
  },
  {
    id: 104,
    name: "Sarita",
    detail: "05-07-2019 5 years angular .net",
  },
  {
    id: 105,
    name: "Anandi",
    detail: "22-09-2017 6 years vueJS python",
  },
  {
    id: 106,
    name: "Parth",
    detail: "10-03-2016 12 years reactJS java spring",
  },
  {
    id: 107,
    name: "Jainee",
    detail: "11-11-2020 4 years reactJS django",
  },
  {
    id: 108,
    name: "Jenish",
    detail: "09-02-2014 15 years vueJS ruby",
  },
  {
    id: 109,
    name: "Suraj",
    detail: "19-08-2012 18 years java spring hibernate",
  },
  {
    id: 110,
    name: "Dhruvi",
    detail: "30-04-2011 20 years reactJS nodeJs php",
  },
];

function separateData(arr) {
  const result = arr.reduce((acc, cur) => {
    const [joiningDate, experienceInYears, ...technology] =
      cur.detail.split(" ");
    const experienceInYearNumber = Number(experienceInYears);
    const techArr = technology.slice(1);

    acc[cur.id] = {
      joiningDate: joiningDate,
      experienceInYears: experienceInYearNumber,
      technology: techArr,
    };
    return acc;
  }, {});
  return result;
}

console.log(separateData(a));

//string encoding task of object
const stringCode = {
  a: 2,
  b: 4,
  c: 6,
  d: 8,
  e: 10,
  f: 12,
  g: 14,
  h: 16,
  i: 18,
  j: 20,
};
function stringEncoding(obj) {
  let result = "";
  for (let i of obj) {
    if (stringCode.hasOwnProperty(i)) {
      result += stringCode[i];
    } else {
      result = "not found!";
    }
  }
  return result;
}
console.log("encoding string : ", stringEncoding("hii"));

//filter, digit sum and total sum
const arr1 = [56, "1str", 20, 65, 000, 0, -10];
function filterDigitSum(arr) {
  const result = arr.filter((val) => {
    if (val === +val && val > 0) {
      return val;
    }
  });
  const sum = result.reduce((acc, cur) => {
    let splitNum = cur.toString().split("");
    // console.log(splitNum)
    return (
      acc +
      +splitNum.reduce((a, b) => {
        // console.log(a,b)
        return a + b;
      })
    );
  }, 0);
  return sum;
}
console.log("filter, digit sum and total sum :", filterDigitSum(arr1));

function filterDigitSum1(arr) {
  const result = arr.filter((val) => {
    if (val === +val && val > 0) {
      return val;
    }
  });
  let sum = 0;
  for (let i of result) {
    sum += i;
  }
  return sum;
}
console.log("filter, digit sum and total sum :", filterDigitSum1(arr1));

//______________________________________________________________________________________________________________________________

const fruit = [
  "Apple",
  "Banana",
  "Chikoo",
  "Pineapple",
  "Guava",
  "Watermelon",
  "Orange",
  "Grapes",
  "Cherry",
  "Peach",
];

//answer 1
function endWithVowels(arr) {
  const result = arr.filter((val) => {
    const char = val.toLowerCase();
    if (
      char.endsWith("a") ||
      char.endsWith("e") ||
      char.endsWith("i") ||
      char.endsWith("o") ||
      char.endsWith("u")
    ) {
      return val;
    }
  });
  return result;
}
console.log("end with vowels count :", endWithVowels(fruit));

//answer 2
// output for each fruits
function createFruitsObj(arr) {
  const result = arr.map((val) => {
    const char = val.toLowerCase();
    const vowels = char.match(/[aeiou]/g);
    const nonVowels = char.length - vowels.length;
    return {
      name: val,
      vowels: vowels.length,
      nonVowels: nonVowels,
    };
  });
  return result;
}
console.log(createFruitsObj(fruit));

//answer 3
function categoryObj(arr) {
  const result = arr.reduce(
    (acc, cur) => {
      const char = cur.toLowerCase();
      const length = char.length;
      if (length % 2 == 0) {
        acc.even.push(cur);
      } else {
        acc.odd.push(cur);
      }
      return acc;
    },
    { odd: [], even: [] }
  );
  return result;
}
console.log(categoryObj(fruit));

// answer 3
function categoryCharObj(arr) {
  const result = arr.reduce((acc, cur) => {
    const char = cur.toLowerCase();
    const firstChar = char[0];
    if (acc[firstChar]) {
      acc[firstChar].push(cur);
    } else {
      acc[firstChar] = [cur];
    }
    return acc;
  }, {});
  return result;
}
console.log(categoryCharObj(fruit));

// let form = document.forms.name
// console.log(form.elements)

//with async and await
// async function myFun1() {
//   let response = await fetch(
//     "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
//   );
//   if (response.ok) {
//     let json = await response.json();
//     console.log(json[1]);
//   } else {
//     alert("HTTP-Error: " + response.status);
//   }
// }
// myFun1();

// without async and await
// fetch('https://api.example.com/data')
//   .then(response => {
//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//   })
//   .then(data => console.log('Data:', data))
//   .catch(error => console.error('Fetch error:', error.message));

//________________________________________________________________

// paper set 2
//answer 1
async function readFile(filename, callback) {
  let result = await fetch(filename);
  if (filename == "error.txt") {
    callback("error: file not found");
  } else {
    callback(await result.text());
  }
}
function getFile(data) {
  console.log(data);
}
readFile("data.txt", getFile);
// readFile("error.txt", getFile);

//answer 2
// convert callback function into promise based function
function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("data received!"), 1000);
  }).then((result) => console.log(result));
  return promise;
}
fetchData();

//answer 3
//return first number greater than 5
const findMaxNum = [2, 3, 6, 8];
function findNumber(arr) {
  let result = arr.find((val) => {
    if (val > 5) {
      return val;
    }
  });
  return result;
}
console.log("first number greater than 5 :", findNumber(findMaxNum));

//answer 4
const employee = {
  id: 1,
  name: "Bob",
  department: {
    name: "Engineering",
    manager: "alice",
  },
};
function getDetails(detail, callback) {
  let pathArray = detail.split(".");
  let current = employee;
  for (let i in pathArray) {
    if (current.hasOwnProperty(pathArray[i])) {
      current = current[pathArray[i]];
    } else {
      callback("obj property not found");
      return;
    }
  }
  callback(current);
}

function getData(result) {
  console.log(result);
}
getDetails("department.name", getData);

//answer 5
const employees = [
  { id: 1, name: "alice", role: "engineer", department: { name: "IT" } },
  { id: 2, name: "bob", role: "manager", department: { name: "HR" } },
  { id: 3, name: "charlie", role: "engineer", department: { name: "IT" } },
];

function findEmployeeByRole(employees, role, callback) {
  const result = employees.filter((employee) => employee.role === role);
  if (result.length > 0) {
    callback(result);
  } else {
    callback("employee not found!");
  }
}
function getEmployees(employees) {
  console.log(employees);
}
findEmployeeByRole(employees, "engineer", getEmployees);

//filter data using fetch api using async and await
async function getEmployee() {
  try {
    const response = await fetch("data.json");
    if (response.ok) {
      const data = await response.json();
      const filter1 = data.filter((val) => val.role === "engineer");
      const employee = filter1.map((val) => {
        const name = val.name[0].toUpperCase() + val.name.slice(1); // first char uppercase and other are remaining
        return {
          name: name,
          role: val.role,
          id: val.id,
        };
      });
      console.log(employee);
    } else {
      throw new Error("data not found");
    }
  } catch (error) {
    console.log(error);
  }
}
getEmployee();

// function getEmployee1(){
//   const addData =  { "id": 4, "name": "raj", "role": "engineer", "department": { "name": "IT" } }
//   fetch('data.json', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(addData)
//   })
//   .then(response => {
//     if(response.ok){
//       return response.json();
//     }
//     else{
//       throw new Error("data not found");
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
// }
// getEmployee1();

async function getProduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const data = await response.json();
      const filter1 = data.filter((val) => val.price > 100);

      const employee = filter1.map((val) => {
        let totalPrice = val.price * val.rating.rate;
        return {
          id: val.id,
          price: val.price,
          category: val.category,
          rating: val.rating,
          totalPrice: totalPrice,
        };
      });
      const category = employee.reduce((acc, cur) => {
        if (!acc[cur.category]) {
          acc[cur.category] = [];
        }
        acc[cur.category].push(cur);
        return acc;
      }, []);
      console.log(category);
    } else {
      throw new Error("data not found!");
    }
  } catch (error) {
    console.log(error);
  }
}
getProduct();

const emp = [
  { id: 1, name: "alice", role: "engineer", department: { name: "IT" } },
  { id: 2, name: "bob", role: "manager", department: { name: "HR" } },
  { id: 3, name: "charlie", role: "engineer", department: { name: "IT" } },
];

//using find method
const manager1 = emp.find((val) => val.role === "manager");
console.log("using find method : ", manager1);

//using filter method
const manager2 = emp.filter((val) => val.role === "manager")[0];
console.log("using filter method : ", manager2);

//using map method
const manager3 = emp.map((val) => (val.role === "manager" ? val : null));
const getManager = manager3.filter((val) => val !== null)[0];
console.log("using map method : ", getManager);

//using reduce method
const manager4 = emp.reduce((acc, cur) => {
  if (cur.role === "manager") {
    return cur;
  }
  return acc;
}, {});
console.log("using reduce method : ", manager4);

//using for of loop
for (let i of emp) {
  if (i.role === "manager") {
    console.log("using for of loop : ", i);
  }
}

//using for in loop
for (let i in emp) {
  if (emp[i].role === "manager") {
    console.log("using for in loop : ", emp[i]);
  }
}

//using forEach
emp.forEach((val) => {
  if (val.role == "manager") {
    console.log("using forEach : ", val);
  }
});

function charSentence(str) {
  const string = str.split(" ");
  const sentence = string.map((val) => {
    if (val.length <= 2) {
      return val;
    }
    return val[0] + val[val.length - 1];
  });
  return sentence.join(" ");
}
console.log(
  "merge first and last character and make a sentence : ",
  charSentence("javascript is progrmming language")
);

console.log("otp generate : ", Math.floor(Math.random() * 10000)); // otp generate

//most occure word
function countWord(str) {
  const word = str.toLowerCase().split(" ");
  const filterWord = ["the", "this", "and", "is", "an"];
  const actualWord = word.filter((el) => !filterWord.includes(el));

  const ans = actualWord.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  console.log("ans", ans);

  const sortdata = Object.entries(ans).sort((a, b) => a - b)[0][0];
  return sortdata;
}
console.log(countWord("The cat is in the hat and the cat is fat"));

const userData = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    skills: ["js", "react", "node"],
    projects: [
      { id: 101, title: "Alpha", hours: 120, completed: true },
      { id: 102, title: "Beta", hours: 80, completed: false },
    ],
  },
  {
    id: 2,
    name: "Bob",
    age: 34,
    skills: ["python", "node", "aws"],
    projects: [
      { id: 103, title: "Gamma", hours: 200, completed: true },
      { id: 104, title: "Delta", hours: 50, completed: false },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    age: 26,
    skills: ["js", "typescript", "react"],
    projects: [{ id: 105, title: "Epsilon", hours: 160, completed: true }],
  },
];

function userProjects(arr) {
  const result = arr.reduce(
    (acc, user) => {
      user.projects.filter((projectVal) => {
        if (projectVal.hours > 50) {
          acc.project.push({
            userName: user.name,
            skillsCount: user.skills.length,
            isYoung: user.age < 30,
            projectTitle: projectVal.title,
            hours: projectVal.hours,
            status: projectVal.completed ? "Done" : "Pending",
          });
        }
        acc.project.sort((a, b) => b.hours - a.hours);
      });

      user.skills.forEach((skill) => {
        if (!acc.uniqueSkills.includes(skill)) {
          acc.uniqueSkills.push(skill);
        }
      });

      return acc;
    },
    { project: [], uniqueSkills: [] }
  );
  return result;
}
console.log(userProjects(userData));

// OUTPUT:

// {
//   projects: [
//     {
//       userName: "Bob",
//       skillsCount: 3,
//       isYoung: false,
//       projectTitle: "Gamma",
//       hours: 200,
//       status: "Done"
//     },
//     {
//       userName: "Charlie",
//       skillsCount: 3,
//       isYoung: true,
//       projectTitle: "Epsilon",
//       hours: 160,
//       status: "Done"
//     },
//     {
//       userName: "Alice",
//       skillsCount: 3,
//       isYoung: false,
//       projectTitle: "Alpha",
//       hours: 120,
//       status: "Done"
//     },
//     {
//       userName: "Alice",
//       skillsCount: 3,
//       isYoung: false,
//       projectTitle: "Beta",
//       hours: 80,
//       status: "Pending"
//     }
//   ],
//   uniqueSkills: ["js", "react", "node", "python", "aws", "typescript"]
// }

const teams = [
  {
    teamId: 1,
    teamName: "Frontend",
    members: [
      {
        name: "Alice",
        experience: 4,
        tools: ["React", "Vue", "CSS"],
        tasks: [
          { id: 201, label: "Landing Page", time: 30, done: true },
          { id: 202, label: "UI Cleanup", time: 15, done: false },
        ],
      },
      {
        name: "Charlie",
        experience: 2,
        tools: ["React", "TypeScript"],
        tasks: [{ id: 203, label: "Dashboard", time: 45, done: true }],
      },
    ],
  },
  {
    teamId: 2,
    teamName: "Backend",
    members: [
      {
        name: "Bob",
        experience: 6,
        tools: ["Node", "Python", "Docker"],
        tasks: [
          { id: 204, label: "API Setup", time: 60, done: true },
          { id: 205, label: "DB Migration", time: 25, done: false },
        ],
      },
    ],
  },
];

function userTask(arr) {
  const result = arr.reduce(
    (acc, cur) => {
      cur.members.filter((membarValue) => {
        if (membarValue.experience > 3) {
          membarValue.tasks.filter((taskValue) => {
            if (taskValue.time > 20) {
              acc.tasks.push({
                teamName: cur.teamName,
                membarName: membarValue.name,
                toolCount: membarValue.tools.length,
                isJunior: membarValue > 3,
                taskLabel: taskValue.label,
                time: taskValue.time,
                state: taskValue.done ? "completed" : "pending",
              });
            }
          });
        }

        membarValue.tools.forEach((tool) => {
          if (!acc.uniqueTools.includes(tool)) {
            acc.uniqueTools.push(tool);
          }
        });
      });

      return acc;
    },
    { tasks: [], uniqueTools: [] }
  );
  return result;
}

console.log(userTask(teams));

// OUTPUIT :
// {
//   tasks: [
//     {
//       teamName: "Frontend",
//       memberName: "Alice",
//       toolCount: 3,
//       isJunior: false,
//       taskLabel: "Landing Page",
//       time: 30,
//       state: "Completed"
//     },
//     {
//       teamName: "Backend",
//       memberName: "Bob",
//       toolCount: 3,
//       isJunior: false,
//       taskLabel: "DB Migration",
//       time: 25,
//       state: "Pending"
//     },
//     {
//       teamName: "Backend",
//       memberName: "Bob",
//       toolCount: 3,
//       isJunior: false,
//       taskLabel: "API Setup",
//       time: 60,
//       state: "Completed"
//     }
//   ],
//   uniqueTools: [
//     "React",
//     "Vue",
//     "CSS",
//     "TypeScript",
//     "Node",
//     "Python",
//     "Docker"
//   ]
// }

const transactions = [
  { user: "Alice", type: "credit", amount: 200, category: "food" },
  { user: "Bob", type: "debit", amount: 100, category: "travel" },
  { user: "Alice", type: "credit", amount: 300, category: "shopping" },
  { user: "Alice", type: "debit", amount: 150, category: "food" },
  { user: "Bob", type: "credit", amount: 400, category: "food" },
  { user: "Alice", type: "credit", amount: 100, category: "food" },
];

const output = (arr) => {
  return arr.reduce((acc, cur) => {
    if (cur.type == "credit") {
      if (!acc[cur.user]) {
        acc[cur.user] = [];
      }
      const existCategory = acc[cur.user].find(
        (val) => val.category == cur.category
      );
      if (existCategory) {
        existCategory.total += cur.amount;
      } else {
        acc[cur.user].push({ category: cur.category, total: cur.amount });
      }
    }
    return acc;
  }, {});
};
console.log(output(transactions));

// {
//   Alice: [
//     { category: "shopping", total: 300 },
//     { category: "food", total: 300 }
//   ],
//   Bob: [
//     { category: "food", total: 400 }
//   ]
// }
