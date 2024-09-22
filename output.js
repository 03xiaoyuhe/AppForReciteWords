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
function printf(value) {
    if (typeof value === 'string') {
        return console.log(`singow line ${value}`);
    }
    else if (Array.isArray(value)) {
        console.log("motile line");
        for (let i of value) {
            console.log(i);
        }
    }
}
console.log("test for 函数签名与签名实现");
printf("ttt");
printf(["ttt", "kkk"]);
let myMap = new Map([
    ["ttt", 1]
]);
let myMap2 = myMap.set("kkk", 1);
console.log("test for 引用");
console.log(myMap);
console.log(myMap2);
let Person1 = {
    name: "Tom",
    age: 30,
    sayHi: () => {
        console.log("Hi Tom");
    }
};
let Person2 = {
    name: "Jim",
    age: 20,
    sayHi: () => {
        console.log("Hi Jim");
    }
};
console.log("对象测试");
console.log(Person1.name);
console.log(Person2.name);
Person1.sayHi();
Person2.sayHi();
class Person {
    constructor(name) {
        this.name = name;
    }
}
class violiant extends Person {
    constructor(name, like) {
        super(name);
        this.like = like;
    }
}
let vio = new violiant("ttt", "aaa");
let Per = new Person("ttt");
console.log("test for 隐式转换及instanceof的使用");
console.log(vio instanceof violiant);
console.log(vio instanceof Person);
