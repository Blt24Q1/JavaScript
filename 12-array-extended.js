//  forEach : 배열 내부 요소들을 하나씩 추출, 콜백함수로 전달
function testForEach() {
    console.log("============ testForEach");
    let source = ["Apple", "Banana", "Carrot", "Durian"];

    console.log("===== 요소들만 전달")
    source.forEach(item => {
        console.log(item);
    })

    console.log("===== 요소와 함께 인덱스 전달")
    source.forEach((item, index) => {
        console.log(`${index} -> ${item}`);
    });

    console.log("===== 요소, 인덱스와 함께 배열 자체도 전달")
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item}`, arr);
    });
}
// testForEach();

function testEverySome() {
    let data = [
        { name: "홍길동", age: 28 },
        { name: "장길산", age: 35 },
        { name: "전우치", age: 25 }
    ];

    console.log("원본데이터:", data);

    //  data 내부의 모든 객체의 나이가 25세 초과하는지 검증
    let result = data.every(obj => {
        return obj.age > 25;    //  검증 로직
    });

    console.log("모든 인물의 나이가 25세 초과인가?", result);

    //  data 내부의 일부 객체의 나이가 25세 초과하는지 검증
    result = data.some(obj => obj.age > 25);

    console.log("일부 인물의 나이가 25세 초과인가?", result);
}
// testEverySome();

//  데이터처리 파이프라인
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const source = [12, 4, 19, 33, 86];
//  map -> filter -> sort -> reduce
function testMap() {
    console.log("===== map");
    // numbers 배열의 모든 요소를 2배
    //  기존 방식 구현
    let multiply = [];
    for (let i = 0; i < numbers.length; i++) {
        multiply.push(numbers[i] * 2);
    }
    console.log("기존방식: *2:", multiply);

    //  map - 형태는 그대로, 내부 요소 조작(변경)
    let result = numbers.map(item => item * 2);
    console.log("원본배열:", numbers);
    console.log("원본배열 * 2:", result);
}
// testMap();
function testFilter() {
    console.log("===== filter");
    //  filter : 내부 요소는 그대로, 조건 만족하는 요소만 뽑아서 새배열 생성
    //  numbers 배열 요소 중 짝수만 필터링
    let result = numbers.filter(item => item % 2 == 0);
    console.log("원본데이터:", numbers);
    console.log("짝수데이터:", result);
    console.log("3의 배수:", numbers.filter(item => item % 3 == 0));
}
// testFilter();

function testReduce() {
    console.log("===== reduce");
    console.log("원본배열:", source);
    //  source 배열 내부요소 모두 합산
    let sum = source.reduce((acc, value, index, arr) => {
        console.log(`callback params (acc: ${acc}, value: ${value}, index: ${index}, arr: ${arr}) -> ${acc + value}`);
        
        return acc + value; //  -> 다음번 콜백의 acc 매개변수로 전달
    }, 0);  //  (acc, value, index, arr), 초기값

    console.log("합산결과:", sum);
}
// testReduce();

function testReduce2() {
    //  반복되는 모든 것에는 reduce 함수를 적용할 수 있다
    //  map 함수의 기능을 reduce 함수로 구현해 봄
    //  testMap 함수의 기능을 reduce 함수로 작성 : 요소값 * 2
    console.log("원본배열:", numbers);
    let result = numbers.reduce((acc, value) => {
        console.log(`callback params (acc: ${acc}, value: ${value})`);
        acc.push(value * 2);
        console.log(`   -> ${acc}`);

        return acc;
    }, []);
    console.log("요소 두배:", result);
}
// testReduce2();

function testReduce3() {
    //  연습문제: reduce 함수를 이용, filter 함수 구현해보기
    //  reduce 함수를 이용, numbers 배열의 짝수 배열을 만들어보기

}