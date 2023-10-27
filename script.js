'use strict';

// დავალება 1

// ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

// let b = 5

// while (b < 101 ) {
//   console.log(b);
//   b++;
// }

// დასრულებულია



// დავალება 2

// მოცემულია მასივი:

// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე


// let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let i = 0; i < array1.length; i++) {
//   const element = array1[i];

//   if (element < 10 && element > 0 ){
//     console.log (element);
//   }
  
// }

// დასრულებულია



// დავალება 3

// მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი


// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// for (let a = 0; a == 5; a++) {
//   const element = array[a];
  
// }
// console.log("არის");

// დასრულებულია


// დავალება 4

// მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

// let array3= [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < array3.length; i++) {
//   sum = sum + array3[i];
  
// }

// console.log(sum);


// დავალება 5

// მოცემულია მასივი:
// let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

// let array4= [1, 2, 3, 4, 5];

// for (let item of array4) {
//   sum += item;
// }

// let result = sum / array4.length;

// console.log(result);

// დავალება 6

// let array5 = [1, 2, 3, 7, 6, 9];

// for ( let itemarray of array5 ) {
//   if (itemarray == 7) {
//     continue;
//   }
//   console.log(itemarray);
// }

// დასრულებულია



// დავალება 7

// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;


// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active",
//   };
  
//   console.log(user.studentstatus);


// დასრულებულია


  // დავალება 8

//   თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;



//   let userInfo = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }

// if (user.age < 18 && user.studentstatus == "active") {
//   console.log("hello");
// } else if (user.name == "levani") {
//   console.log("hello  levani");
// } else if (user.studentstatus == "active" || user.age < 25) {
//   console.log("hello2");
// } else {
//   console.log("error");
// }




// დავალება 9

// მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  
  
}




// დავალება 10

let array10 = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ]






// დავალება 11

// let users = [
//   {username: 'giorgi', status: false},
//   {username: 'levani', status: false},
//   {username: 'anna', status: true}
// ]

// console.log(users[2]);

// დასრულებულია




