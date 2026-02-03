// let a = 1;
// let b = 2;
// console.log(1/2);

//비교연산자(매우중요)
// 쓰면 안되는것 -> var, ==,!=
// let compA = 1 !== "1";
// console.log(compA);

let a;
console.log(a);
console.log(typeof a);
//누군가가 값을 주었다(어떤값을 줄지아무도 모른다.
//동적타입이기 때문에 모든타입을 다 받아버린다)
//절대 받으면 안되는것 : 널타입과 언디파인타입은 문제가생김
//널병합연산자를 이용한다.
b = 30;
a = a?? b;
console.log(a);
