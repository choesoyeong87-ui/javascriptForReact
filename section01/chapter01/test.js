//1 
const soso = {
    name :"최소영",
    age : 19,
    tall : 170,
    like : "떡볶이"
};
const sosokeys = Object.keys(soso);
console.log(sosokeys);

for (let i = 0; i < sosokeys.length; i++) {
    const key = sosokeys[i];
    console.log(`${key}=${soso[key]}`);
}
//2
const values = Object.values(soso);
for (let i = 0; i < values.length; i++) {
    console.log(`${values[i]}`)
    
}
console.log(values);
//3
const array = ['가','고','싶','다'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
array.forEach((value,index,array)=>{
    //console.log(`value=${value}`)
    //console.log(`value=${index}`)
    console.log(`value=${array}`)
});
//4.
const newArray = [];
for (let i = 0; i < array.length; i++) {
    let value = array[i];
    value = value+20;
    newArray.push(value);
}
console.log(array);
console.log(newArray);

let _newArray = array.map((value)=>(value + 20));
console.log(_newArray);
//5.
let array1 = [
    {name : "최소영", hobby : "배드민턴"},
    {name : "전우림", hobby : "독서"},
    {name : "황동현", hobby : "독서"},
    {name : "공지철", hobby : "영화감상"}
];
let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
    let item = array1[i];
    if (item.hobby === "배드민턴") {
        newArray1.push(item);
    }
}
console.log(array1);
console.log(newArray1);

const readPeople = array1.filter(
    (item)=> item.hobby === "독서"
);
console.log(readPeople);
//6. find로 공지철 찾기
let findItem = array1.find((value)=>value.hobby==="영화감상");
console.log(findItem);

//7. findindex로 취미가 독서인 사람 찾기
let findIndex = array1.findIndex((value)=>value.hobby==="독서");
console.log(findIndex);

//8.slice 로 1~3번째 찾기
let Array = array1.slice(0,3);
console.log(Array);
//9. concat 로 
let arr1 = arr1.concat(array1);
console.log(array1);
//10. join
const arrA = ["최소영","님","행복하세요"];
const joined = arrA.join("=");
console.log(joined);
//11. split
const arrayA = joined.split("=")
console.log(arrayA);


const animal = { 
type: "고양이", 
name: "나비", 
color: "black", 
}; 
//상수인 animal 에 새로운 객체를 대입하면 안됨.  
animal ={ 
name: “호랑이” 
} 
animal.name('걸')