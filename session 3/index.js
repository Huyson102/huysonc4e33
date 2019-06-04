// let food1 = "com"
// let food2 = "pho"
// let food3 = "ghe"
// let food4 = "rau"
// let food5 = "chao"

// // // // array (mang)
// let foods = ["com", "pho", "ghe", "rau", "chao"];

// // // // index (vi tri)
// console.log(foods[0]);

// // // // length of array (do dai mang)
// console.log(foods.length);

// CRUD

// // // //1. CREATE - THÊM

// let newFood = "Ca";
// foods.push(newFood);
// console.log(foods);
// // // // research : add item by index cách thêm phần tử vào 1 vị trí


// // // 2. READ
// // // // 2.1 READ ONE
// console.log(foods[3]);
// // // 2.2 READ MANY
// console.log(foods);
// // //way 1
// for (let i = 0; i < foods.length ; i++){ //tri so
//     // console.log(i+1);
//     // console.log(foods[i]);}
//     ////  let food = foods[i];
//     console.log(`${i+1}. ${foods[i]}`); // in 1.com .... //(``) backticks    
// }
// // //way 2
// foods.forEach((food, index) => {
//     console.log(`${index+1}.${food}`);
// })

// // // 3.UPDATE
// foods[1] = "Bun";
// console.log(foods);


// // // 4. DELETE
// // // 4.1 Delete by index
// foods.splice(1, 3); //(vị trí xóa, số phần tử xóa theo)
// console.log(foods);

// // // 4.2 Delete by value
// let valueDelete = "rau";
// let indexDelete = foods.indexOf(valueDelete);
// //// console.log(indexDelete);
// foods.splice(indexDelete, 1);
// console.log(foods);
