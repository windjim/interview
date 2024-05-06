//元件資料
const data = [
  {
    value: "test1",
    content: "test1",
  },
  {
    value: "test2",
    content: "test2",
  },
  {
    value: "test3",
    content: "test3",
  },
  {
    value: "test4",
    content: "test4",
  },
  {
    value: "test5",
    content: "test5",
  },
];
// 第一步寫法(主要是要先做出小功能來)
// DOM結構寫法
// const dropdownContent = document.querySelector(".dropdown-content");
// const getValueBtn = document.querySelector(".dropdown-btn");
// let valueArr = [];

// 上傳資料
// getValueBtn.addEventListener("click", (e) => {
//   alert(`您有勾選的項目為${valueArr.length ? valueArr.join() : "無"}`);
// });
// 刪除資料
// function deleteValue(value) {
//   valueArr = valueArr.filter((item) => item !== value);
// }
// 渲染
// function render() {
//   let content = "";
//   data.forEach((item) => {
//     content += `<div> <input type="checkbox" value="${item.value}"  class="optionCheck"> ${item.content}</div>`;
//   });
//   dropdownContent.innerHTML = content;
//   const optionsValue = document.querySelectorAll(".optionCheck");
//   optionsValue.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       e.target.checked
// ? valueArr.push(e.target.value)
//         : deleteValue(e.target.value);
//     });
//   });
// }
// 初始化
// function init() {
//   render();
// }
// init();

// 第二步寫法(會使用class原因是因為考量到每個實體建立後都可以獨立作業，不會影響到彼此，方法也都儲存在prototype)
// class應用
class Dropdown {
  constructor(selectContent, updateBtn, data, text) {
    this.selectContent = document.querySelector(selectContent);
    this.updateBtn = document.querySelector(updateBtn);
    this.data = data;
    this.text = text;
    this.content = "";
    this.valueArr = [];
  }

  //輸出測試
  upload() {
    this.updateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(
        `目前是${this.text},您有勾選的項目為${
          this.valueArr.length ? this.valueArr.join() : "無"
        }`
      );
    });
  }
  // 移除
  deleteValue(value) {
    this.valueArr = this.valueArr.filter((item) => item !== value);
  }
  // 渲染
  render() {
    this.data.forEach((item) => {
      this.content += `<div> <input type="checkbox" value="${item.value}"  class="optionCheck"> ${item.content}</div>`;
    });
    this.selectContent.innerHTML = this.content;
    // 這邊因為沒有對正確的select下手導致會選到同個範圍的
    const optionsValue = document.querySelectorAll(
      `.${this.selectContent.className} .optionCheck`
    );

    optionsValue.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.target.checked
          ? this.valueArr.push(e.target.value)
          : this.deleteValue(e.target.value);
        // console.log("添加", this.valueArr, this.text);
      });
    });
  }
  // 初始化
  init() {
    this.render();
    this.upload();
  }
}
const component1 = new Dropdown(
  ".dropdown-content",
  ".dropdown-get-btn",
  data,
  "元件一"
);
component1.init();

const component2 = new Dropdown(
  ".dropdown-content2",
  ".dropdown-get-btn",
  data,
  "元件二"
);
component2.init();

// const component3 = new Dropdown(
//   ".dropdown-content3",
//   ".dropdown-get-btn3",
//   data,
//   "元件三"
// );
// component3.init();
