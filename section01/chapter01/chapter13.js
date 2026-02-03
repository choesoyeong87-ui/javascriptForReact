//콜백함수 적용 함수선언 함수표현 화살표함수
function repeat(count,callback) {
  for (let index = 0; index < count; index++) {
    //콜백함수를 진행한다.
    callback(index,index);
  }
}
/*
let funcA = function (index) {
  console.log(index);
}
let funcB = function (index) {
  console.log(index*10);
}
let funcC = function (index) {
  console.log(index+50);
}
let callback = funcA;
repeat(5,funcC);
*/
//callback(10);
//화살표함수 function 지우고 화살표 그리고 중괄호 지운다
// 익명객체는 잠시쓰고 버리는것
//let funcD = (index)=> console.log(index);
//let funcF = (index)=>console.log(index+50);

//indext부터 시작해서 funcE자리에 다 붙여넣어버린다.
repeat(5,(index1,index2)=>console.log(index1+index2));

//console.log(undefined*10);
