//  연습문제 1.
//  2단 ~ 9단까지 구구단표 출력
//  - for문 버전 (*)
//  - while문 버전

// console.log("\n========== 구구단 for 버전");
// for (let dan = 2; dan <= 9; dan ++) {
//     console.log(dan + "단");
//     for (let num = 1; num <= 9; num ++) {
//         console.log(dan + " * " + num + " = " + dan * num);
//     }
//     console.log();
// }

// console.log("\n========== 구구단 while 버전");
// let dan = 2;
// while(dan <= 9) 
// {
//     let num = 1;
//     console.log(dan + "단");
//     while (num <= 9) {
//         console.log(dan + " * " + num + " = " + dan * num);
//         num ++;
//     }
//     console.log();
//     dan++;
// }

//  연습문제2.
/*

*****
****
***
**
*

*/
//  - for문 버전 (*)
//  - while문 버전

// console.log("\n========== 역삼각형 for 버전");
// for (let count = 5; count > 0; count --) {
//     let stars = "";
//     for (let col = 1; col <= count; col ++) {
//         stars += "*";
//     }
//     console.log(stars);
// }

console.log("\n========== 역삼각형 while 버전");
let count = 5;
while(count > 0) {
    let stars = "";
    let col = 1;

    while (col <= count) {
        stars += "*";
        col ++;
    }
    console.log(stars);
    count --;
}

//  for ... in : 객체의 속성 키를 반복
const obj = {
    name: "홍길동",
    age: 28,
    job: "도적"
}

for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}

//  for ... of : 배열을 순회
const arr = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}