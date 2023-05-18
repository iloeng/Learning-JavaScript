let x = 2, y = 3;
console.log(x + y)
console.log((x === 2) && (y === 3))
console.log("hello world")

let z;
z = 0;
console.log(z)


// 1.3 JavaScript 之旅
let a;
a = 1;
a;
a = 1;
a = 0.01;
a = 'Hello World';
a = "JavaScript";
a = true;
a = false;
a = null;
a = undefined;

// 对象是 JavaScript 最重要的数据类型
// 对象是一个 key/value 的集合， 或者一个字符串到值的映射
let book = {
    topic: 'JavaScript',
    edition: 7
};

// 使用 . 或者 [] 访问对象的属性
book.topic;       // => "JavaScript"
book["edition"]   // => 7
book.author = "Flanagan";  // 通过赋值创建新属性
book.contents = {};        // {} 是一个没有属性的空对象

// 使用 ?. (ES2020) 条件式访问属性
book.contents?.ch01?.sect1  //  => undefined:  book.contents 没有 ch01 这个属性

// JavaScript 也支持值的数组  (数值索引的列表)
let primes = [2, 3, 5, 7];
primes[0]
primes.length
primes[primes.length - 1]
primes[4] = 9;
primes[4] = 11;
let empty = []
empty.length

let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];

let data = {
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]]
};

function plus1(x) {
    return x + 1;
}

plus1(5)

let square = function (x) {
    return x * x;
};
square(plus1(y))

const plus2 = x => x + 1;
const square2 = x => x * x;
plus2(y)
square2(plus2(y))

let a = [];
a.push(1,2,3);
a.reverse();

points.dist = function () {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b);
}

points.dist()

function abs(x) {
    if (x>=0){
        return x;
    } else {
        return -x;
    }
}

abs(-10) === abs(10)

function sum(array) {
    let sum = 0;
    for (let x of array){
        sum += x;
    }
    return sum;
}

sum(primes)

function factorial(n) {
    let product = 1;
    while (n>1) {
        product *= n;
        n--;
    }
    return product;
}

factorial(4)

function factorial2(n) {
    let i, product = 1;
    for (i=2; i<=n; i++)
        product *= i;
    return product;
}
factorial2(5)

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(){
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        );
    }
}

let p = new Point(1, 1);
p.distance()
