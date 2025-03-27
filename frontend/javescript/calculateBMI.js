// calculateBMI.js

function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
  
    // 日志输出原始输入
    console.log(weight);
    console.log(height);
  
    // 验证输入
    if (isNaN(weight) || weight <= 2.5) {
      alert("请输入有效体重");
      return;
    }
  
    if (isNaN(height) || height <= 50) {
      alert("请输入有效身高");
      return;
    }
  
    console.log("数据校验通过");
  
    // 计算 BMI（注意：单位从 cm 转 m，所以除以100再平方）
    let bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);
    console.log(bmi);
  
    // 获取结果显示元素
    let resultElement = document.getElementById('bmi-result');
    console.log(resultElement);
  
    // 显示结果
    if (bmi < 18.5) {
      resultElement.innerHTML = `你的 BMI 值是 ${bmi} ，体重过轻`;
    } else if (bmi < 24) {
      resultElement.innerHTML = `你的 BMI 值是 ${bmi} ，体重正常`;
    } else if (bmi < 28) {
      resultElement.innerHTML = `你的 BMI 值是 ${bmi} ，体重过重`;
    } else if (bmi < 35) {
      resultElement.innerHTML = `你的 BMI 值是 ${bmi} ，体重肥胖`;
    } else {
      resultElement.innerHTML = `你的 BMI 值是 ${bmi} ，体重非常肥胖`;
    }
  }
  
  // 绑定按钮点击事件
  document.getElementById('btn-calculate').onclick = function () {
    calculateBMI();
  };
  