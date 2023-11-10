//宣告指令3種
let le = 0 ;
//最早出來的宣告指令
var va = 1 ;
//賦予質之後，不可變更
const con = 2 ;

console.log(le)
console.log(va)
console.log(con)

le = 44 ;
va = 55 ;

console.log(le)
console.log(va)

//利用typeof，判別JS資料型態
//整數 Number
let x = 5 ;
console.log(typeof(x))
console.log(x)

//字串 String
let str = "字串" ;
console.log(typeof(str))
console.log(str)

//布林值 Boolean
let boo = true ;
console.log(typeof(boo))
console.log(boo)

//陣列 Arrary(object)
let arr = [];
console.log(typeof(arr))
console.log(arr)

//物件 Object
let obj = {};
console.log(typeof(obj))
console.log(obj)

let obj2 = {
  //key : value
    name : "南哥",
    age : 18,
    work : "工程師"
};
console.log(obj2)

