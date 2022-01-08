const a = 100;
b = 999;
c = 888;
console.log('let b =', b);
console.log('let c =', c);

flag = true;
if (flag == true)
{
    console.log('=> a = ', a);
    console.log(' b = ', b);

    const d = 777;
    let e = 888;
    var f = 555;

    console.log("=> d = ", d);
    console.log('=> e = ', e);
    console.log('=> f = ', f);

}
console.log('=> f =',f);

let x='1';
let y='2';
let z = x+y;
console.log('z là = ',z);

let g=1;
let h=2;
let k=g+h;
console.log("k là = ",k);

number=parseInt("123.45");
console.log("Number là = ", number);
number1=parseFloat("123.444");
console.log("Number1 = ",number1);


console.log('1 == 1 ==>', 1==1);
console.log('1.0 == 1 ==>', 1.0 == 1);
console.log('1 == 1.0 ==>', 1 == 1.0);
console.log('--------------------------');
console.log('1 === 1 ==>', 1 === 1);
console.log('1 === 1 ==>', 1 === '1');
console.log('1 === 1.0 ==>', 1 === 1.0);
console.log('1.0 === 1 ==>', 1.0 === 1);


num = 100;
console.log("num ++", num++);
console.log("++num", ++num);
console.log("--num", --num);
console.log("num--", num--);
console.log(num);
num /=6;

console.log("num /= 6", num);
num *=2;
console.log("num *="), num;

console.log("Num", num/3);
console.log("Num", num%3);
console.log("Num", parseFloat(num/3));
console.log("Num", parseInt(num/3));