//async,await 방식 => promise 이다.

async function getData(){
    return {name:"csy",age:20}
}

function getData2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let flag = false;
            if (flag) {
                resolve({name:"csy",age:20});
            }else{
                reject("비동기처리요청 실패")
            }
        },1000)
    })
}
setTimeout(()=>{
    console.log(getData2());
},2000)
//console.log(getData())


async function printData(){
    getData2().then((value)=>console.log(value))
    
}
async function printData2(){
    const data = await getData2();
    console.log(data);
    
}
printData2();