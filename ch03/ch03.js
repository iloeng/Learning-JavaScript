console.log(0)
console.log(3)
console.log(100000)

console.log(0xff)
console.log(0xBADCAFE)

console.log(0b10101)
console.log(0o377)

console.log(3.14)
console.log(2345.6789)
console.log(.333333)
console.log(6.02e23)
console.log(1.4738223E-32)

// 使用下划线分割
let billion = 1_000_000_000;
let bytes = 0x89_AB_CD_EF;
let bits = 0b0001_1101_0111;
let fraction = 0.123_456_789;
console.log(billion)
console.log(bytes)
console.log(bits)
console.log(fraction)

x=1; y=2;z=4
console.log(Math.pow(2, 53))  // 2 的 53 次方
console.log(Math.round(.6))      // 1.0  舍入到最接近的整数
console.log(Math.ceil(0.6))      // 1.0  向上舍入到一个整数
console.log(Math.floor(0.6))     // 0.0  向下舍入到一个整数
console.log(Math.abs(-5))        // 5    绝对值
console.log(Math.max(x, y, z))      // 返回最大的参数
console.log(Math.min(x, y, z))      // 返回最小的参数
console.log(Math.random())          // 为随机数 x， 其中 0<=x<1.0
console.log(Math.PI)                // 圆周率
console.log(Math.E)                 // e: 自然对数的底数
console.log(Math.sqrt(3))        // 3**0.5 3 的平方根
console.log(Math.pow(3, 1/3)) // 3**（1/3） 3 的立方根
console.log(Math.sin(0))         // 三角函数
console.log(Math.log(10))           // 10 的自然对数
console.log(Math.log(100)/Math.LN10)// 以 10 为底 100 的对数
console.log(Math.log(512)/Math.LN2) // 以 2 为底 512 的对数
console.log(Math.exp(3))         // Math.E 的立方
console.log(Math.cbrt(27))       // 3  立方根
console.log(Math.hypot(3, 4))// 5   所有参数平方和的平方根
console.log(Math.log10(100))     // 2   以 10 为底的对数
console.log(Math.log2(1024))     // 10  以 2 为底的对数
console.log(Math.log1p(x))          // （1+x） 的自然对数； 精确到非常小的 x
console.log(Math.expm1(x))          // Math.exp(x)-1; Math.log1p() 的逆运算
console.log(Math.sign(x))           // 对 < == 或 >0 的参数返回 -1， 0， 或 1
console.log(Math.imul(2, 3))  // 6 优化的 32 为整数乘法
console.log(Math.clz32(0xf))     // 28  32 为整数中前导 0 的位数
console.log(Math.trunc(3.9))     // 3   剪掉分数部分得到整数
console.log(Math.fround(x))         // 舍入到最接近的 32 为浮点数
console.log(Math.sinh(x))           // 双曲线正弦    Math.cosh()  Math.tanh()
console.log(Math.asinh(x))          // 双曲线反正弦   Math.acosh()  Math.atanh()

// Infinity
Number.POSITIVE_INFINITY

BigInt(Number.MAX_SAFE_INTEGER)
let string = '1' + '0'.repeat(100)
BigInt(string)


let timestamp = Date.now();  // 当前时间的时间戳  数值
let now = new Date();          // 当前时间的日期对象
let ms = now.getTime();      // 转换为毫秒时间戳
let iso = now.toISOString();  // 转换为标准格式的字符串




