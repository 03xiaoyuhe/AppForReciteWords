interface IPerson {
    name: string;
    age: number;
    sayHi: () => void;
}

let Person1: IPerson = {
    name: "Tom",
    age: 30,
    sayHi: (): void => {
        console.log("Hi Tom");
    }
}

let Person2: IPerson = {
    name: "Jim",
    age: 20,
    sayHi: (): void => {
        console.log("Hi Jim");
    }
}

console.log("对象测试");
console.log(Person1.name);
console.log(Person2.name);
Person1.sayHi();
Person2.sayHi();

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class violiant extends Person {
    like: string;

    constructor(name: string, like: string) {
        super(name);
        this.like = like;
    }
}

let vio = new violiant("ttt", "aaa");
let Per = new Person("ttt");

console.log("test for 隐式转换及instanceof的使用");

console.log(vio instanceof violiant);
console.log(vio instanceof Person);
// 输出
// true
// true
// 及子类的对象也是父类的对象

