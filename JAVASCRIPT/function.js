// // console.log("Start");

// // var a = 10;
// // var b = 20; 

// // function addition1() {
// //     var a =1;
// //     var b = 2;
// //     return a+b;
// // }

// // function addition2() {
// //     var a = 30;
// //     var b = 40;
// //     return a+b;
// // }

// // console.log(addition1());
// // console.log(addition2());

// // console.log("End");

// // ? Anonymous Functions
// console.log("Start");

// console.log(sayHello); // entire function

// function sayHello() {
//     return "Hii I am from named function";
// }

// console.log(sayHello);  // entire function

// // --------------------------------------

// let greet = function () {
//     return "Hello how are you";
// };
// console.log(greet); // entire function

// ? Case 2;
console.log("Start")
function grandParent() {
    var gp = 80;
    var a = 10;
    var b = 20;
    var c = 30;

    function parent() {
        var p = 50;

        function aniket() {
            var aniket = -30;

            var balance_land = gp + p + aniket;
            return balance_land;
        }
        return aniket()
        }
        return parent();
    }
    console.log(grandParent());
    console.log("End");
