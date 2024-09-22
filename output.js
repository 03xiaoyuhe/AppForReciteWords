"use strict";
let message = "Hellow World";
console.log(message);
let test1 = 2;
console.log(test1);
let test2 = 3;
console.log(test1 + test2);
let global_num = 12;
class Numbers {
    constructor() {
        this.num_var = 13;
    }
    storeNum() {
        var local_Num = 14;
    }
}
Numbers.sval = 10;
console.log("test for learn1");
console.log(global_num);
console.log(Numbers.sval);
let obj = new Numbers();
console.log(obj.num_var);
// console.log(local_Num) // ->erro
console.log("test for learn2");
let bool = true;
console.log(bool ? true : false);
bool = !bool;
console.log(bool ? true : false);
class numbers {
    constructor() {
        this.number = new Array();
    }
}
let a = new numbers();
console.log(typeof a);
console.log("learn for for-loop");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let numbers2 = [1, 2, 3, 4];
console.log(numbers2);
for (let i in numbers2) {
    console.log(numbers2[i]);
}
let someArry = [1, "string", false];
for (let i of someArry) {
    console.log(i);
}
let numbers3 = [1, 2, 3, 4, 5, 6];
console.log("test every");
numbers3.every((val, idx, array) => {
    if (val > 5)
        return false;
    console.log(val);
    return true;
});
