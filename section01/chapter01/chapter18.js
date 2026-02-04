//단락평가

let returnFalse = ()=>{
    console.log("false function");
    return false;
}
let returnTrue = ()=> {
    console.log("true function");
    return true;
}
console.log(returnFalse() || returnTrue());
console.log(returnFalse() && returnTrue());
//0,"",false,null,undefined,{} NaN
let test = "abc" + 10;
if (test) {
    console.log(`${test}=ture 취급한다.`)
}else{
console.log(`${test}=false 취급한다.`)
}

//단락평가테스팅
//함수선언문(호이스팅)
function printName(parson){
    const name = parson && personalbar.name;
    console.log(name || "person 객체가 없습니다");
}

printName({name:"홍길동"});

// 방법1 
function returnFalse() { 
console.log("Fasle 함수"); 
return false; 
} 
 
function returnTrue() { 
console.log("True 함수"); 
return true; 
} 
 
console.log(returnTrue()|| returnFalse()); 
 
// 방법2 
function returnFalse() { 
console.log("Fasle 함수"); 
return undefined; 
} 
 
function returnTrue() { 
console.log("True 함수"); 
return 10; 
} 
 
console.log(returnFalse() && returnTrue());