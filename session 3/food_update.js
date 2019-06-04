// let foods = ["com", "pho", "ghe", "rau", "chao"];

// //// console.log("Thuc don gom co ,"foods)
// let Nhap = prompt("Ban co muon update khong? ");

// if( Nhap == "No" || Nhap == "no") // Hoặc kí hiệu là ||
// {
//     console.log(" Cam on ban");
// }
// if ( Nhap == "Yes" || Nhap == "yes")
// {
//     console.log("Vi tri ban muon update? ");
//     let vitri = Number(prompt("Nhap vi tri: "));
//     console.log(foods[vitri]);
//     let monan = prompt("Mon an ban muon them vao?");
//     foods[vitri - 1] = (monan);
//     console.log(foods);
// };
// else {console.log("Cu phap sai!")};



// ///
// let foods = ["com", "pho", "ghe", "rau", "chao"];
// foods.forEach((food, index) => {console.log(`${index+1}.${food}`);})  
// let answer = prompt ("Do you want up date? (Y/N)");

// if (answer === "y" || answer === "Y") // if (answear.toLowerCase() === "y")

// {   let position = prompt('Position?');
//     let newFood = prompt('New food name?');
//     if (0 <= position - 1 && position - 1 < foods.length){
//         foods[position - 1] = newFood;
//         foods.forEach((food, index) => {
//         console.log(`${index+1}.${food}`); })   
//     } else {console.log("Index not availbale!");}
// }
// else if (answer === "n" || answer === "N") // else if (answer.toUpperCase() === "N")
//     {console.log("Good bye!");}
// else {console.log("Get out!");}