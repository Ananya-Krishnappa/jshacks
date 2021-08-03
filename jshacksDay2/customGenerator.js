function* customGenerator() {
    let i=0;
    while(yield i++,true);
}
const customId=customGenerator();
console.log(customId.next().value);
console.log(customId.next().value);
console.log(customId.next().value);