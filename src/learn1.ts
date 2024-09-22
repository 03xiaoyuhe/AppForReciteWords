let global_num = 12;
class Numbers {
    num_var = 13;
    static sval = 10;

    storeNum(): void {
        var local_Num = 14;
    }
}
console.log("test for learn1")
console.log(global_num)
console.log(Numbers.sval)
let obj = new Numbers();
console.log(obj.num_var)
// console.log(local_Num) // ->erro