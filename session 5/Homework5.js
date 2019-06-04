// REVIEW

// Why should we use functions at all? 
//     - Define the code once, and use it many times.You can use the same code many times with different arguments, to produce different results. 
// How to define/declare a function?
//     - function name(parameter1, parameter2, parameter3) {// code to be execute };
// How to call/use a function?
//     - name(value/function)
// What is return, why and how do we use it?
//     - When JavaScript reaches a return statement, the function will stop executing. 
//       If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement. 
//       Functions often compute a return value. The return value is "returned" back to the "caller":
// Do we have to use return in every function?
//     - No
// What are function arguments/parameters, why and how we use it?
//     - Function parameters are listed inside the parentheses () in the function definition.
//       Function arguments are the values received by the function when it is invoked.
//       Inside the function, the arguments (the parameters) behave as local variables.
// How to use function from a different file other than our currently working file?
//     - You can load abc.js put a script tag on the HTML to include it( before the script that uses the functions of the other script).


// Turtle exercise

//E1:

// let sayhello = () => {
//     for(i = 0; i < 3; i++){
//         console.log("Hello world");
//     }
// }
//     sayhello();

//E2:

// let number = (x, y) => {
//     let tong = x + y;
//     console.log(tong);
// }

// number(1, 2);

//E3:

// clear()
// let drawSquare = (lt, clr) =>{
//     color(clr);
//     for(i=0; i<4; i++) {
//         fd(lt);
//         rt(90);
//     }
// }

// drawSquare(100,"red");

//E4:

// for(let i = 0; i  < 30; i ++){
//     drawSquare(i * 5, 'red')
// lt(17)
// penup()
//     forward(i * 2)
//     pendown()
// }
// -> Large number of squares

//E5:

// clear()
// let drawStar = (lt, clr) =>{
//     color(clr);
//     rt(90);
//     for(i=0; i<5; i++){
//         fd(lt);
//         rt(144);
//     }
// }

// drawStar(100, "yellow");


// Serious exercise

//E6:

// let remove_dollar_sign = (s) => {
//     Stringn = s.replace(/\$/g, "");  
//     return Stringn;
// }
// let s = prompt("Input: ");
// let si = remove_dollar_sign(s);
// console.log(si);

//E7:

// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}


//E8:

// let get_even_list = (l) => {
//     let list = [];
//     for(i = 0; i < l.length; i++){
//         if (l[i] % 2 == 0){
//             list.push(l[i]);
//         }
//     }
//     return list;
// };


//E9:

// even_list = get_even_list([1, 2, 5, 9, -10, 6])

// if (even_list == [2, -10, 6]){
//     print("Your function is correct")};
// else{
//     console.log("Ooops, bugs detected")}

//E10:

// let is_inside( [a, b],[x, y, d, r])=>{
//     let k = x + r;
//     let h = y + d;

//     if((a == x || a == k) && (b == y || b == h)){
//        return true;
//     }
//     if( a > x && a < k && b > y && b < h){
//        return true;
//     }
//     else 
//     {
//        return false;
//     };
// }
 // ~~ auto true
//E11:

// inside = is_inside([200, 120], [140, 60, 100, 200])

//     if ( inside == true ){
//         print("Your function is correct")};
//     else{
//         console.log("Ooops, bugs detected")
//     }



