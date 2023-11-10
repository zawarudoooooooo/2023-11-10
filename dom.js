// document.getElementById 根據id抓
const spanText = document.getElementById("spanText");
console.log(typeof(spanText))
console.log(spanText)
console.dir(spanText)

//單純插入文字
spanText.innerText = "<a href=https://elite.taiwanjobs.gov.tw/>taiwanjobs</a>"
//可以插入html標籤資訊
spanText.innerHTML = "<a href=https://elite.taiwanjobs.gov.tw/>taiwanjobs</a>"

const aTest = document.getElementById("aTest")


//利用DOM連結到 imput & span & button
const testIn = document.getElementById("testIn")
// testIn.value = "ddd"
// console.dir(testIn)

console.log(typeof(testIn.value))
console.log(testIn.value)

//把 input 標籤的值(value) 給賦予到str變數
let str = testIn.value;

//字串轉數字
//parseInt
console.log(typeof(parseInt(str)))
console.log(parseInt(str))

//Number
console.log(typeof(Number(str)))
console.log(Number(str))

//String methods
let today = "Today is a good day";
//印出字串長度
console.log(today.length)
//印出該字串索引位置的值
console.log(today[4])
//從該字串開始往後捕捉值，並產生一個新字串
console.log(today.slice(4))
//從該字串的第一個索引位置(第一個數字)，往後捕捉值到第二個索引位置(第二個數字)並產生一個新字串
console.log(today.slice(4,16))
//印出該字串中，()中值的索引位置
console.log(today.indexOf("good"))

//將字串內容全數轉成大寫
console.log(today.toUpperCase())
//將字串內容全數轉成小寫
console.log(today.toLowerCase())

//以下3個方法都是回傳 Boolean
//確認變數字串的開頭，是否符合條件字串
//變數字串startswith(條件字串)
console.log(today.startsWith("To"))

//確認變數字串的結尾，是否符合條件字串
//變數字串endswith(條件字串)
console.log(today.endsWith("y"))

//判斷變數字串，是否包含條件字串
//變數字串includes(條件字串)
console.log(today.includes("day"))

//將字串切成陣列
//變數字串.split(切成陣列的條件)
console.log("split 裡面放空字串")
console.log(today.split(" "))
console.log("split 裡面放空格")
console.log(today.split(""))
console.log("split 裡面放a")
console.log(today.split("a"))

document.getElementsByClassName
document.querySelector
document.querySelectorAll