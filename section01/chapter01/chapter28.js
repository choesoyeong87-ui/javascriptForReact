/*
console.log(1)
// console.log(2)
// setTimeout(()=>{
// console.log(2)

// },3000);
setInterval(()=>{
    console.log(2)
},1000)

console.log(3)
*/


//함수선언식
//함수 선언식
// 1번방식 : 1초 후에 이벤트 처리를 정의한 것이다.
// 이벤트 : 시간이 1초 지나면setTimeout()
// 이벤트처리일(핸들러일)
/*
function task(a,b) {
  setTimeout(()=>{
    let sum = a+ b;
    console.log(a + b = ${sum});
  }, 1000);
}
task(10,20);

let callbackA = (sum)=>{
  console.log(a + b = ${sum})
};
/*
let callbackA = (sum)=>{
    let sum = a+b;
    console.log(`a+b= ${sum}`)

}
    */
   //3번방식
   // 이벤트 : 시간이 3초 지나면setTimeout()
    // 이벤트처리일(핸들러일)
function task(a,b,callbackA){
  setTimeout(()=>{
    let sum = a+b;
    callbackA(sum);},
    3000)
}
task(10,20,(sum)=>console.log(sum));

//1단계 음식을 주문하는 사항
//이벤트 : 음식을 주문하면 3초후에 
//핸들러 : 음식이 완성이 되서 나오는것.
function orderFood(food,callback){
    console.log(`${food}가 주문되었습니다`);
  
    setTimeout(()=>{
    callback(food);
    },3000);
}
orderFood("떡볶이",(food)=>{console.log(`소영이가좋아하는${food}가 완성`)});


//음식을 차게 요청한것
function coolFood(food,callback){
    console.log(`${food}식힌음식요청`);
  
    setTimeout(()=>{
    callback(food);
    },3000);
}
coolFood("떡볶이",(food)=>{console.log(`${food}`)});

/*
//2단계 떡볶이를 요청하고,떡볶이를 차게요청함
orderFood("떡볶이",(food)=>{
    console.log(`소영이가좋아하는${food}가 완성`)
coolFood(food,(food)=>console.log(`${food}가 차갑게 완성`))
});
*/

//3단계 떡볶이 요청 => 떡볶이 차게 요청 => 떡복이 냉동요청
orderFood("떡볶이",(food)=>{
    console.log(`소영이가좋아하는${food}가 완성`)
coolFood(food,(food)=>{
    console.log(`${food}가 차갑게 완성`)
    coolFood(food,(food)=>console.log(`${food}가 냉동완성`))
})
});