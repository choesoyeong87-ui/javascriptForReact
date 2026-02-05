let task = function task(a,b) {
  setTimeout(()=>{
    console.log("안녕");
    if (true) {
        //resolve 상태
    }else{
        //reject 상태
    }
  }, 1000);
}
//task();
/*
let promise = new Promise(()=>{
    setTimeout(()=>{
    console.log("안녕");
     if (true) {
        //resolve 상태
    }else{
        //reject 상태
    }
  }, 1000);
});

console.log(promise);
*/
//resolve 상태
/*
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("안녕");
     if (true) {
        resolve("promise 안녕")
    }else{
        //reject 상태
    }
  }, 3000);
});
setTimeout(()=>{
    console.log(promise2);

},4000);
*/
/*
//reject 상태
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("안녕3");
     if (false) {
        resolve("promise 안녕")
    }else{
        reject("promise 실패")
    }
  }, 3000);
});
setTimeout(()=>{
    console.log(promise3);

},4000);
*/

/*

//4. Promise 를 실제로 활용해보자. 
const promise4 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = "10"; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 
setTimeout(() => { 
      console.log(promise4); 
}, 3000); 
*/
/*
//promise성공한후 그 결과값을 출력한다.
const promise5 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = "10"; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 //primise5가 성공하면 잡업실행
promise5.then((value)=>console.log(`성공한 결과 ${value}`));
promise5.catch((value)=>console.log(`실패한 결과 ${value}`));
setTimeout(() => { 
      console.log(promise5); 
}, 3000); 

//************************************************************************************************* */
//promise chain 방식으로 표현한다.
/*
const promise6 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 

promise6
    .then((value)=>console.log(`성공한 결과 ${value}`))
    .catch((value)=>console.log(`실패한 결과 ${value}`));
setTimeout(() => { 
      console.log(promise6); 
}, 3000); 


*/

//promise를 함수를 통해서 실험해보자
function add10(num){
const promise = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
return promise
}
//1단계
/*
let promise = add10("100");

promise
    .then((value)=>console.log(`성공한 결과 ${value}`))
    .catch((value)=>console.log(`실패한 결과 ${value}`));
*/


//2단계
/*
let promise = add10(100);

promise
    .then((value)=>{
        console.log(`성공한 결과 ${value}`)
    let _promise = add10(value);
    _promise.then((value)=>{
        console.log(`성공한 결과 ${value}`)
    })
    })
    .catch((value)=>console.log(`실패한 결과 ${value}`));
*/
//2단계 수정
/*
let promise = add10(100);

promise
    .then((value)=>{
        console.log(`성공한 결과 ${value}`)
        //promise리턴
    return add10(value);
       })
    .then((value)=>console.log(`성공한 결과 ${value}`))
    .catch((value)=>console.log(`실패한 결과 ${value}`));
*/

//3단계
/*
let promise = add10(100);

promise
    .then((value)=>{
        console.log(`성공한 결과 ${value}`)
        //promise리턴
    return add10(value);
       })
    .then((value2)=>{
        console.log(`성공한 결과 ${value2}`)
    return add10(value2)
    })
    .then((value3)=>console.log(`성공한결과 ${value3}`))
    .catch((value)=>console.log(`실패한 결과 ${value}`));
*/

//음식주문사항을 1단계 2단계 3단계로 해결하시오.

function orderFood(food, callback){
  console.log(`${food}의 주문이 들어왔습니다.`)
  setTimeout(() => {
    callback(food);
  }, 1000);
}

function orderFood2(food){
    const primise = new Promise((resolve,reject)=>{
        console.log(`${food} 주문`);
        setTimeout(()=>{
            let flag = true;
            if(flag){
                resolve(food + '음식완료')
            } else{
                reject(food+'음식실패')
            }
        },2000);
    });
return primise;
}

/*
orderFood2("떡볶이")
    .then((value)=>{console.log(value)})
    .catch((error)=>{console.log(error)})
*/


    //cool food

    function coolFood2(food){
    const primise = new Promise((resolve,reject)=>{
        console.log(`${food} 식힌음식주문`);
        setTimeout(()=>{
            let flag = true;
            if(flag){
                resolve(food + '식힌음식 준비완료')
            } else{
                reject(food+'식힌음식 준비실패')
            }
        },2000);
    });
return primise;
}
/*
coolFood2("탕수육")
    .then((value)=>{console.log(value)})
    .catch((error)=>{console.log(error)})
*/

     //freeze food
    
    function freezeFood2(food){
    const primise = new Promise((resolve,reject)=>{
        console.log(`${food} 냉동음식주문`);
        setTimeout(()=>{
            let flag = true;
            if(flag){
                resolve(food + '냉동음식 준비완료')
            } else{
                reject(food+'냉동음식 준비실패')
            }
        },2000);
    });
return primise;
}
/*
freezeFood2("만두")
    .then((value)=>{console.log(value)})
    .catch((error)=>{console.log(error)})



    //******************************************* */
//2단계 처리방식
orderFood2("떡볶이")
    .then((value)=>{
        console.log(value)
        return coolFood2(value)
    })
    .then((value)=>{console.log()})
    .catch((error)=>{console.log(error)})

    //******************************************* */
    //3단계 처리방식
    orderFood2("떡볶이")
    .then((value)=>{
        console.log(value)
        return coolFood2(value)
    })
    .then((value)=>{
        console.log(value)
    return freezeFood2("떡볶이")
    })
    .then((value)=>console.log(value))
    .catch((error)=>{console.log(error)})