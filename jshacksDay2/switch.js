const test1 = ()=>console.log("test1");
const test2 = ()=>console.log("test2");
const test3 = ()=>console.log("test3");

//old way
const value = 2;
switch (value) {
  case 1:
    test1();
  break;

  case 2:
    test2();
  break;

  case 3:
    test3();
  break;
  // And so on...
}
//better way
function abc (key){
    let data = {
        1: test1,
        2: test2,
        3: test3
      };
      data[key] && data[key]();
}
