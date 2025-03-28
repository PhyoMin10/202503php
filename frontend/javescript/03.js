// 当按下键盘的按键时会触发这个事件
document.addEventListener('keydown', function (event) {
    // 下面的代码会显示按下了哪个键和对应的代号（现在是注释掉的）
    // let key = event.key;
    // let code = event.code;
    //
    // document.getElementById('keydown-event-output').innerHTML = `你按下了 ${key} 鍵，代碼是 ${code}`;
});


// 提交表单的时候触发
document.addEventListener('submit', function (event) {
    event.preventDefault(); // 不让页面刷新（阻止默认行为）

    let form = event.target; // 得到我们正在提交的表单
    let formData = new FormData(form); // 用 FormData 来收集输入的内容

    console.log(formData.entries()); // 看看表单里的内容

    let data = {}; // 新建一个对象，来保存表单的值
    for (let [key, value] of formData.entries()) {
        data[key] = value; // 把每一项保存到对象里
    }

    // 把对象转成字符串，显示在页面上
    document.getElementById('submit-event-output').innerHTML = JSON.stringify(data);
});


// 添加点击事件后又立刻移除，所以不会执行
function handleClick(event) {
    alert('按钮被点击了');
}

let button = document.getElementById('remove-event-listener');
button.addEventListener('click', handleClick); // 添加事件
button.removeEventListener('click', handleClick); // 然后移除事件


// 事件冒泡的例子（点击子元素时不让父元素响应）
let parent = document.getElementById('parent');
let child = document.getElementById('child');

parent.addEventListener('click', function () {
    alert('父元素被点击了');
});

child.addEventListener('click', function (event) {
    event.stopPropagation(); // 不让事件冒泡到父元素
    alert('子元素被点击了');
});


// 对象的例子
// 我们用对象来描述一个人，有名字、年龄、行为
let person = {
    name: '张三',
    age: 20,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    eat: function () {
        console.log(this.name + ' 正在吃饭');
    }
};

person.sayHello();
person.eat();
console.log(person.name);


// 构造函数：用来创建多个类似的对象
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let student = new Person('李四', 18);
console.log(student.name);


// 用 class 来创建类，写法更现代
class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let cat = new Animal('Tom');
cat.sayHello();


// 另一个类的例子，有品牌和价格
class Car {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    run() {
        console.log(`${this.brand} 在行驶中`);
    }
}

let bmw = new Car('BMW', 300000);
console.log(bmw.brand);


// 类的继承：Dog 继承 Animal
class Dog extends Animal {
    bark() {
        console.log('汪汪汪');
    }
}

let dog = new Dog('旺财');
dog.sayHello(); // 来自 Animal
dog.bark(); // 自己的


// 异步编程（简单了解）
// 同步是一步一步来，异步不会等，继续执行下面的代码

// 创建一个 Promise，2 秒后输出内容
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello, Promise');
//     }, 2000);
// });

// promise.then((value) => {
//     console.log(value);
// });

// console.log('Promise 调用了');


// 用 async/await 的方式来获取数据
// async function fetchData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     console.log(data);
// }

// fetchData().then(r => console.log('fetchData 完成了'));
// console.log('fetchData 被调用');


// 错误处理（try/catch）：程序出错时不让它崩掉
try {
    $element = document.getElementById('not-exist'); // 找不到这个元素
    $element.addEventListener('click', function () {
        alert('元素被点击了');
    });
    console.log($element);
} catch (error) {
    // 捕捉错误
    console.error('发生错误: ' + error.message);
} finally {
    // 不管有没有错都会执行这里
    console.log('finally');
}


// 手动抛出一个错误（除数不能为 0）
function divide(a, b) {
    if (b === 0) {
        throw new Error('除数不能为 0. (这是一个自定义错误)');
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error('发生错误: ' + error.message);
}


// DOM 操作：控制网页上的内容

// 获取标题元素，打印它的文字
let heading = document.getElementById('heading');
console.log(heading.textContent);

// 获取所有 class 是 item 的元素
let items = document.getElementsByClassName('item');

// 遍历所有 item，找到写着 PHP 的，把它变红
for (let item of items) {
    if (item.textContent === 'PHP') {
        item.style.color = 'red';
    }
    console.log(item.textContent);
}


// 获取所有 li 元素
let liElement = document.getElementsByTagName('li');
// 获取第二个 li，改成蓝色
let liElementPython = document.getElementsByTagName('li')[1];
liElementPython.style.color = 'blue';


// 用 querySelector 获取第一个 .item
let itemElementJava = document.querySelector('.item');
itemElementJava.style.color = 'green';
itemElementJava.textContent = 'Go'; // 改内容为 Go

// 获取所有 .item
let itemElements = document.querySelectorAll('.item');

// 遍历所有 .item，打印每个的内容
itemElements.forEach(function (item) {
    console.log(item.textContent);
});

// 改第三个 item 的颜色
let itemElementJavaScript = document.querySelectorAll('.item')[2];
itemElementJavaScript.style.color = 'purple';


// 模拟从服务器获取用户信息（假装我们有网络请求）
let getUserinfoElement = document.getElementById('get-userinfo');
getUserinfoElement.addEventListener('click', function () {
    // 假装从服务器拿到这些信息
    let userinfo = {
        username: 'LuStormstout',
        email: 'lustromstout@gmail.com'
    }

    // 把这些信息加到页面的列表里
    let userinfoElement = document.getElementById('userinfo');
    for (let key in userinfo) {
        let liElement = document.createElement("li");
        liElement.textContent = key + " : " + userinfo[key];
        userinfoElement.appendChild(liElement);
    }
});


