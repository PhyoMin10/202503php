// for 循环：重复执行某些代码

console.log("---------- for 循环 ----------");

for (let i = 0; i < 5; i++) {
    // 打印当前的 i 值
    console.log("当前值为：" + i);
}


// while 循环：只要条件是 true，就一直执行

console.log("---------- while 循环 ----------");

let i = 0;
while (i < 5) {
    // 打印当前的 i 值
    console.log("当前值为：" + i);
    i++; // 每次加1
}


// do while 循环：先做一次，然后再判断条件

console.log("---------- do while 循环 ----------");

let j = 0;
do {
    // 打印当前的 j 值
    console.log("当前值为：" + j);
    j++;
} while (j < 5);


// for in 循环：用来看对象里面的内容

console.log("---------- for in 循环 ----------");

let userInfo = {
    username: "张三", age: 20, city: "东京"
};

for (let key in userInfo) {
    // 打印出 key 和对应的值
    console.log(key + ": " + userInfo[key]);
}


// for of 循环：用来一项一项拿数组或字符串里的东西

console.log("---------- for of 循环 ----------");

let phones = ["iPhone", "三星", "小米"];

for (let phone of phones) {
    // 打印手机名字
    console.log(phone);
}

let username = "Lu";

for (let byte of username) {
    // 打印每个字母
    console.log(byte);
}


// break：提前结束循环
// continue：跳过这一次循环，继续下一次

console.log("---------- break ----------");

for (let i = 0; i <= 10; i++) {
    if (i === 3) {
        break; // 遇到 3 就不继续了
    }
    console.log("当前值为：" + i);
}

console.log("---------- continue ----------");

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue; // 跳过 5，不打印
    }
    console.log("当前值为：" + i);
}


// 函数：把代码打包起来，用的时候再调用

console.log("---------- 函数 ----------");

// 定义一个函数，加法
function add(a, b) {
    return a + b;
}

let sum = add(10, 20);
console.log(sum);

// 函数表达式（也是函数的一种写法）
let totalPrice = function (price, count) {
    return price * count;
}
console.log(totalPrice(5, 2));

// 箭头函数：写法更简单
let divide = (a, b) => a / b;
console.log(divide(10, 2));


// 函数参数讲解

console.log("---------- 函数的参数 ----------");

// 有默认值的参数
function sayHello(name = "张三") {
    console.log("你好, " + name);
}

sayHello("李四");
sayHello(); // 没传参数，就用默认的

// 函数可以接收别的函数作为参数（回调函数）
function sayHi(name, age, callback) {
    console.log("你好, " + name + ", 今年" + age + "岁");
    callback(); // 调用回调
}

sayHi("王五", 25, function () {
    console.log("这是回调函数");
});

// += 是简写，比如 a += 1 就是 a = a + 1

// 不定参数：可以传很多个值
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumAll(1, 3, 4, 5, 100));


// 参数解构赋值：直接把对象或数组拆开来用

console.log("---------- 参数的解构赋值 ----------");

function printInfo({name, age}) {
    console.log("姓名：" + name + ", 年龄：" + age);
}

let user = {name: "张三", age: 20};
printInfo(user);


// 没有 return 的函数会返回 undefined

function sayGoodbye() {
    // 这里没有写 return
}

let goodbye = sayGoodbye();
console.log(goodbye); // 打印出来是 undefined


// 递归函数：函数自己调用自己，要有结束条件

console.log("---------- 递归函数 ----------");

// 模拟一个文件夹结构
const tree = {
    name: 'root', children: [{
        name: 'folder1', children: [{
            name: 'folder1-1', children: []
        }]
    }, {
        name: 'folder2', children: []
    }]
};

// 计算这个结构有多深
function getTreeDepth(node) {
    if (!node.children || node.children.length === 0) {
        return 1; // 没有子节点就返回 1
    }

    let maxChildDepth = 0;

    for (const child of node.children) {
        const childDepth = getTreeDepth(child);
        if (childDepth > maxChildDepth) {
            maxChildDepth = childDepth;
        }
    }

    return maxChildDepth + 1;
}

console.log(getTreeDepth(tree)); // 结果是 3


// 作用域：变量能用的范围

console.log("---------- 作用域 ----------");

// 全局变量
let globalVar = 100;

function testScope() {
    // 函数里的变量
    let localVar = 200;
    console.log("函数里面可以访问：" + localVar);
    console.log("函数里也能访问全局变量：" + globalVar);
}

testScope();
console.log("外面可以访问全局变量：" + globalVar);
// console.log(localVar); // 这行会报错，外面不能访问函数里面的变量

// 块级作用域：{} 里面的变量只能在里面用
{
    let blockVar = 300;
    console.log("块级作用域内：" + blockVar);
}
// console.log(blockVar); // 报错，外面访问不到


// 闭包：函数记住了外面定义的变量

console.log("---------- 闭包 ----------");

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2


// 事件处理：用户操作网页时触发的事情

console.log("---------- 事件处理 ----------");

// 点击按钮会弹出提示
document.getElementById("btn-onclick").onclick = function () {
    alert("这是鼠标点击事件");
}

// 双击按钮也会弹提示
document.getElementById("btn-dblclick").ondblclick = function () {
    alert("这是鼠标双击事件");
}

// 鼠标移到按钮上时变色，移出后还原
document.getElementById("btn-mouseover").onmouseover = function () {
    document.getElementById("btn-mouseover").style.backgroundColor = "#FF0080";
}
document.getElementById("btn-mouseover").onmouseout = function () {
    document.getElementById("btn-mouseover").style.backgroundColor = "#4C4C4C";
}

// 输入框获得焦点时变灰，失去焦点时变白
document.getElementById("username").onfocus = function () {
    document.getElementById("username").style.backgroundColor = "#E5E5E5";
}
document.getElementById("username").onblur = function () {
    document.getElementById("username").style.backgroundColor = "#ffffff";
}
