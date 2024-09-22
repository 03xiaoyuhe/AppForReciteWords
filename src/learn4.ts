function printf(value: string): void;
function printf(value: string[]): void;
function printf(value: unknown): void {
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