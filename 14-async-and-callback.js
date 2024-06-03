//  callback 처리
function logicA() {
    console.log("begin logic A");

    //  비동기
    setTimeout(() => {
        console.log("\tcallbackA called");
        console.log("\tbegin logic B");

        //  비동기
        setTimeout(() => {
            console.log("\t\tcallbackB called");
        }, 2000);

        console.log("\tend logic B");
    }, 2000);

    console.log("end logic A");
}
// logicA();

//  비동기처리를 동기방식처럼 호출하기 위해 마련된 객체 -> Promise
//  Pending, Fullfill, Reject
function logicPromise() {
    console.log("begin logicPromise");

    //  Promise 객체를 리턴
    return new Promise((resolve, reject) => {
        //  resolve 함수 -> fullfill 상태로 이전시키는 역할
        //  reject 함수 -> reject 상태로 이전시키는 역할
        console.log("begin logicPromise");
        
        //  비동기
        setTimeout(() => {
            //  내부 로직 수행
            resolve("RESOLVE");
        }, 2000);

        console.log("end logicPromise");
    });
}

function testLogicPromise() {
    
}