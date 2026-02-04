//내장함수(라이브러리)(반복문 => 자기스타일로 변경한 반복문)
//1. forEach 맴버함수 (화살표함수)
/*
const array = [1,2,3,4];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
array.forEach((value,index,array)=>{
    console.log(`value=${value}`)
    console.log(`value=${index}`)
    console.log(`value=${array}`)
    console.log(`***********************************`)

});
array.forEach((value)=>{
    console.log(`value=${value}`)
    

});
//console.log(array);
*/
/*
const array = [1,2,3,4];

const newArray = [];
for (let i = 0; i < array.length; i++) {
    let value = array[i];
    value = value * 10;
    newArray.push(value);
}
console.log(array);
console.log(newArray);


-2.map
let_newArray = array.map((value) => value * 10);
console.log(_newArray);


//***************************************************** */
//3. filter
/*
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 
let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
   let item = array1[i];
   if (item.hobby === "테니스") {
    newArray1.push(item);
   }
   
   
}
console.log(array1);
console.log(newArray1);
const array2 = [1,2,3,4  ,5,3,2,2,2,23,2,5,3,2,1,1,2,5,8,7,6,5,31];
let newArray2 = array2.filter(value=>value === 2);
console.log(array1);
console.log(newArray2);


 const tennisPeople = array1.filter( 
 (item) => item.hobby === "테니스" 
);


let newArray4 = array1.filter((value)=>value.hobby === "테니스");
console.log(newArray4);
console.log(tennisPeople);
*/

/*
//-4. find,findindex
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 
let findItem = null;
for (let i = 0; i < array1.length; i++) {
    let item = array1[i];
    if (item.hobby === "독서") {
        findItem = item;
        break;
    }
    
}
console.log(findItem);

let findItem2=array1.find((value)=>value.hobby==="독서");
let findIndex=array1.findIndex((value)=>value.hobby==="독서");

console.log(findIndex2);
*/
//***************************************************************** */
/*  -5.slice(Start end)
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스1" }, 
{ name: "저길동2", hobby: "테니스2" }, 
{ name: "저길동3", hobby: "테니스3" }, 
{ name: "저길동4", hobby: "테니스4" }, 
{ name: "저길동5", hobby: "테니스5" }, 
{ name: "홍길동2", hobby: "독서1" }, 
{ name: "홍길동3", hobby: "독서2" }, 
{ name: "홍길동4", hobby: "독서3" }, 
{ name: "홍길동5", hobby: "독서4" }, 
{ name: "홍길동6", hobby: "독서5" }, 
];

let newArray = array1.slice(0,3);
console.log(newArray);
*/



/* -6. concat
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스1" }, 
{ name: "저길동2", hobby: "테니스2" }, 

];
let array2 = [ 
 
{ name: "홍길동4", hobby: "독서3" }, 
{ name: "홍길동5", hobby: "독서4" }, 
{ name: "홍길동6", hobby: "독서5" }, 
];
let array3 = array1.concat(array2);
console.log(array3);
*/

// 배열을 사전순으로 내림차순 정렬하는 메서드 
// 자바스크립트는 문자단위로 정렬
/*
let arr3 = [0,1,3,2,10,30,20]; 


arr3.sort((num1,num2)=>{
    return num1-num2;
});
console.log(arr3);

//숫자를 정렬하면 문제발생,문자로하면 문제없음
arr3.sort() 
console.log(arr3);

let arr4 = ["abc","bcd","def","abc"]; 
arr4.sort()
console.log(arr4);

arr4.sort().reverse();
console.log(arr4);
*/

// -7. join
const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined); 
const array7 = joined.split("==")
console.log(array7);