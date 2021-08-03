console.time("timer-1");
let valueA = 10;
let valueB = 20;
console.time("timer-1");
for(let i=0;i<10000e6;i++){

[valueA,valueB] = [valueB,valueA];
}

console.timeEnd("timer-1");
console.time("timer-2");
let j = 0;
while(j<10000e6){
[valueA,valueB] = [valueB,valueA];
j++
}
console.timeEnd("timer-2");