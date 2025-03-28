// 计时器功能
let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let count = 0;
let interval;

start.addEventListener('click', () => {
    interval = setInterval(() => {
        count++;
        timer.innerText = count;
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    count = 0;
    timer.innerText = count;
});

// BMI 功能
function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || weight <= 2.5) {
        alert("请输入有效体重");
        return;
    }

    if (isNaN(height) || height <= 50) {
        alert("请输入有效身高");
        return;
    }

    let bmi = weight / (height * height) * 10000;
    bmi = bmi.toFixed(2);

    let resultElement = document.getElementById('bmi-result');
    let innerHTML = "你的 BMI 值是: " + bmi;

    if (bmi < 18.5) {
        resultElement.innerHTML = innerHTML + " 体重过轻";
    } else if (bmi < 24) {
        resultElement.innerHTML = innerHTML + " 体重正常";
    } else if (bmi < 28) {
        resultElement.innerHTML = innerHTML + " 体重过重";
    } else if (bmi < 35) {
        resultElement.innerHTML = innerHTML + " 体重肥胖";
    } else {
        resultElement.innerHTML = innerHTML + " 体重非常肥胖";
    }
}

document.getElementById('bmi-form').onsubmit = function (event) {
    event.preventDefault();
};

document.getElementById('btn-calculate').onclick = function () {
    calculateBMI();
};

// Todo List 功能
document.getElementById("add-todo").onclick = function () {
    let input = document.getElementById("todo-input");
    let task = input.value.trim();

    if (task) {
        let li = document.createElement("li");
        li.textContent = task;
        document.getElementById("todo-list").appendChild(li);
        input.value = "";
    }
};

