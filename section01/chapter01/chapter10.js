//함수 선언식
// function namefunc(name) {
//   console.log(name);
// }

// namefunc("병합null");
// let namefunc2 = namefunc;
// namefunc2("삼항연산자");
// console.log(typeof namefunc2);

//함수 표현식
let namefunc = function(name) {
  console.log(name);
}
namefunc("함수표현식");
//화살표 함수(문장이 1문장이면 중괄호 생략 쌉가능! 매게변수가 하나면 소괄호도 생략가능하다)
let namefunc2 = name=>  console.logname;
namefunc("함수표현식");

//return도 생략이 가능하다 한문장일때 있다면!
let namefunc3 = name=> name+"님 반갑습니다";




// 1. 함수 선언식 
function funcA() { 
  console.log("funcA"); 
} 
 
let varA = funcA; 
varA(); 
 
//2. 함수표현식(익명함수) 
let varB = function () { 
  console.log("funcB"); 
}; 
varB(); 
 
let varD = function funD() { 
   console.log("funcD"); 
}; 
varD();   // ok 
funD();   // x 함수명으로 콜을 해도 에러발생, 그래서 함수표현식에서는 함수명이 필요없다.  
 
// 3. 화살표 함수 
let varC = (value) => { 
  console.log(value); 
  return value + 1; 
}; 
 
console.log(varC(10));

