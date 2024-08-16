function pow(x, y) {

    if (y === 0) {
        return 1;
    }
    if (y < 0) {
        x = 1 / x;
        y = -y;
    }
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2, 3));
console.log(pow(5, 4));
console.log(pow(2, -3));
console.log(pow(3, 0));
