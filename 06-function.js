//  함수 선언문
//  선언
function sum(a, b) {    //  함수이름(매개변수목록)
    return a + b;
}

//  호출
console.log(sum(10, 20));

//  함수 표현식 -> 익명 함수
//  함수도 객체다 (1급 시민이다)
//      -> 다른 객체들과 동등한 권리와 지위를 가진다
//      - 변수에 할당될 수 있다
//      - 다른 함수의 매개변수로 전달될 수 있다
const asum = function(a, b) {
    console.log(typeof a, typeof b);
    return a + b;
}
console.log(typeof asum);
console.log(asum(10, 20));

//  함수의 매개변수의 이해
//  ES의 함수는 선언부에 선언된 매개변수의 개수와 맞지 않게 호출 해도 괜찮다
console.log(asum());

//  매개변수가 없는 함수
function getNumberTotal() {
    //  ES 특성상 전달되는 모든 매개변수는 arguments 함수 객체에 모두 전달
    // console.log("arguments:", arguments);
    //  전달받은 매개변수 전체를 합산
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {    
        if (typeof arguments[i] === "number") { //  매개변수의 타입이 숫자일 때만 합산
           result += arguments[i];
        }
    }
    return result;
}
console.log(getNumberTotal(1, 2, 3, 4, 5));
console.log(getNumberTotal(1, 2, "3", 4, 5));
