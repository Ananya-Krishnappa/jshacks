function* customGenerator(len=20) {
    let i=1;
    while(yield i+=1,i<=len);
}
const customId=customGenerator();
let j = 11;
while(console.log(customId.next()),j--,j != 0);