console.log("learn for for-loop");

for (let i: number = 0; i < 10; i++) {
    console.log(i);
}


let numbers2: number[] = [1, 2, 3, 4];
console.log(numbers2);
for (let i in numbers2) {
    console.log(numbers2[i]);
}

let someArry = [1, "string", false];
for (let i of someArry) {
    console.log(i);
}

let numbers3 = [1, 2, 3, 4, 5, 6];
console.log("test every")
numbers3.every((val, idx, array) => {
    if (val > 5) return false;
    console.log(val);
    return true;
}
)
