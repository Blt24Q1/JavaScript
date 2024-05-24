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




//  TODO : for ... in, for ... of
//      array extended 수업 이후에 추가 진행