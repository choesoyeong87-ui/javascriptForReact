//클레스 속에 있는 맴버변수를 반복문을 이용해서 출력하기
const person = { 
name: "김동진", 
age: 25, 
tall: 179 
};  
const personKeys =Object.keys(person);
console.log(personKeys);

for (let index = 0; index < personKeys.length; index++) {
    const key = personKeys[index];
    console.log(`${key}=${person[key]}`);
    
}

const values = Object.values(person);
for (let index = 0; index < valueArray.length; index++) {
    console.log(`${valueArray[index]}`);
    
}
console.log(values);