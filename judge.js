let x = 5 ;
let y = 6 ;

//if...else判斷式

//二擇一
if(x==y){
    console.log("x和y相等")
}else{
    console.log("x和y不相等")
}

//多擇一
if(x>y){
    console.log("x大於y")
}else if(x<y){
    console.log("y大於x")
}else{
    console.log("x等於y")
}

//switch判斷式
switch(x==y){
    case true:
        console.log("x等於y")
        break;
        default:
            console.log("x不等於y")
}

switch(x){
    case 4 :
        console.log("四")
        break;
    case 5 :
        console.log("五")
        break;
    case 6 :
        console.log("六")
        break;
    default:
        console.log("這是case外的答案")
}

//switch JS 特別用法，case放入判斷式
switch(true){
    case x > y :
        console.log("x大於y")
        break;
    case x < y :
        console.log("y大於x")
        break;
    default:
        console.log("x等於y")
        break;
}