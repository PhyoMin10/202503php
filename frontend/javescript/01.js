// 变量声明（变量声明方式）: var, let, const
let age = 18;
const PI = 3.14;

// 数据类型
// 1. Number
let studentCount = 8;
let tall = 1.75;

// 2. String
let username = "LuStormstout";
let address = "东京市港区";
console.log(username);

// 3. Boolean
let isAdmin = true;
let isLogin = false;

// 4. Null
let orders = null;

// 5. Undefined
let age1;
console.log(age1); // 输出: undefined

// 6. Object
let userInfo = {
  username: "LuStormstout",
  age: 18,
  address: "东京市港区"
};
console.log(userInfo);

// 7. Array
let colors = ["red", "green", "blue"];
let scores = [80, 90, 100];
console.log(colors);
console.log(scores);

// 8. Function
function sayHello(username) {
  return "Hello " + username;
}
console.log(sayHello("LuStormstout"));

// 类型检测
console.log(typeof studentCount); // number
console.log(typeof username);     // string
console.log(typeof isAdmin);      // boolean
console.log(typeof orders);       // object (注意 null 是 object)
console.log(typeof scores);       // object (数组也是 object)
console.log(typeof sayHello);     // function

// 运算符
let numA = 10;
let numB = 3;

console.log(numA + numB); // 加法
console.log(numA - numB); // 减法
console.log(numA * numB); // 乘法
console.log(numA / numB); // 除法
console.log(numA % numB); // 取余
numA++;
console.log(numA);        // 自增
numB--;
console.log(numB);        // 自减

// 算总价
let productPrice = 100;
let productCount = 3;
let totalPrice = productPrice * productCount;
console.log(totalPrice);

// 比较运算符
let liScore = "80";
let zhangScore = 90;
let wangScore = 80;

console.log(liScore > zhangScore);  // false
console.log(liScore < zhangScore);  // true
console.log(liScore <= zhangScore); // true
console.log(liScore == wangScore);  // true (类型转换后比较)
console.log(liScore === wangScore); // false (全等，类型也要一致)
console.log(liScore != wangScore);  // false
console.log(liScore !== wangScore); // true

// 逻辑运算符
let isLogin1 = true;
let isAdmin1 = false;
console.log(isLogin1 && isAdmin1);  // false
console.log(isLogin1 || isAdmin1);  // true
console.log(!isLogin1);             // false

// 条件语句 if/else
let isLogin2 = true;
if (isLogin2) {
  console.log("已登录");
} else {
  console.log("未登录");
}

// 成绩判断
let score = 80;
if (score >= 90) {
  console.log("优秀");
} else if (score >= 80) {
  console.log("良好");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

// 三元运算符
let isMember = true;
let price = isMember ? 80 : 100;
console.log(price);

// switch 语句
let day = 2;
switch (day) {
  case 1:
    console.log("星期一");
    break;
  case 2:
    console.log("星期二");
    break;
  case 3:
    console.log("星期三");
    break;
  default:
    console.log("星期四");
}
