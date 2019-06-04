//Study
// Nested list là dạng danh sách lồng ghép, 
// nghĩa là một list xuất hiện với vai trò là phần tử của một list khác.
// VD: A = [ 1, 4, 5, [8, 9]]


//Một danh sách có thể lưu trữ cả số nguyên và chuỗi trong đó không?
// ----> Có.

//E1:


// inventory = {
//     'gold' : 500,
//     'pouch' : ['flint', 'twine', 'gemstone'],
//     'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// };
// console.log(inventory);

//// add key pocket
// inventory.pocket = ['seashell', 'strange berry', 'lint'];
// console.log(inventory);

// //// remove('dagger')
// // let remove = inventory.backpack.indexOf('dagger');
// // inventory.backpack.splice(remove, 1);
// // console.log(inventory);

// // add 50 number 

// // inventory.gold += 50;
// // console.log(inventory);

// //// let add = 50;
// //// inventory.gold.push(add);
// //// console.log(inventory);


// //E2:
// let prices = {
//     "banana": 4,
//     "apple": 2,
//     "orange": 1.5,
//     "pear": 3
// };
// let stock = {
//     "banana": 6,
//     "apple": 0,
//     "orange": 32,
//     "pear": 15
// }

// let key = Object.getOwnPropertyNames(prices);
// let price = Object.values(prices);
// let count= Object.values(stock);
// for( i = 0; i < Object.keys(key).length ; i++)
//     {
//     console.log( key[i]);
//     console.log(`price: ${price[i]}`);
//     console.log(`stock: ${count[i]}`);
//     };


// let money = 0;
// for( i=0;  i < Object.keys(price).length ; i++)
//     {
//         money += price[i]*count[i];
//     }
// console.log(`Tổng tiền nếu bán tất cả trái cây là : ${money}`);


//E3:
// let shop = {
//     it1 : "T-Shirt" ,
//     it2 : "Sweater" ,
// };
// console.log("Our items:", shop);
// let answer = prompt("Welcome to our shop, what do you want (C, R, U, D)?")
//     if (answear.toLowerCase()==="r")
//     {
//         console.log(`Our items : ${shop}`);
//     }
//     else if(answer.toLowerCase()==="c")
//     {
//         let Create = prompt("Enter new item:");
//         shop.push(` ${Create}`);
//         console.log(`Our items : ${shop}`);
//     }
//     else if(answer.toLowerCase()==="u")
//     {
//         let Update =Number(prompt("Update shop?"));
//         let Upd=prompt("New item?");
//         shop.splice(Update - 1, 1, ` ${Upd}`);
//         console.log(`Our items : ${shop}`);
//     }
//     else if(answer.toLowerCase()==="d")
//     {
//         let Delete =Number(prompt("Delete position:"));
//         shop.splice(Delete - 1 , 1);
//         console.log(`Our items : ${shop}`);
//     }
//     else{
//         console.log("Please enter C,R,U,D only.");
//     }



// //E4:
// let sizes = [5, 7, 300, 90, 24, 50, 75];
//     console.log(`Hello these are my ship sizes`, sizes);

//     console.log(`Now my biggest sheep has the size of ${Math.max.apply(null, sizes)}. Let's shear it!`)

// sizes[2] = 8
//     console.log(`After shearing, here is my flock:`, sizes)

// for (i=0; i<=6; i++){
//     sizes[i] = Number(sizes[i]) + 50  
// }
// console.log(`One month has passed. Now here is my flock: `, sizes)

// console.log(`Now my biggest sheep has the size of ${Math.max.apply(null, sizes)}. Let's shear it!`)

// sizes[3] = 8
// console.log(`After shearing, here is my flock:`, sizes)

// for (i=0; i<=6; i++){
//     sizes[i] = Number(sizes[i]) + 50  
// }
// console.log(`One month has passed. Now here is my flock`, sizes)

// sizes[4] = 8
// console.log(`After shearing, here is my flock:`, sizes)

// for (i=0; i<=6; i++){
//     sizes[i] = Number(sizes[i]) + 50  
// }
// console.log(`One month has passed. Now here is my flock:`, sizes)

// sizes[5] = 8
// console.log(`After shearing, here is my flock:`, sizes)

// for (i=0; i<=6; i++){
//     sizes[i] = Number(sizes[i]) + 50  
// }
// console.log(`One month has passed. Now here is my flock:`, sizes)

// go = 0
// for (i=0; i<=6; i++){
//     go += sizes[i]
// }
// console.log(`My flock has the total size of ${go}. I would get ${Number(go * 2)}`);
