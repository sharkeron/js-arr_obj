function square(x) { return x * x; }

function map(fn, array) {
    var result = array.map(function(elem) {
        return fn(elem);
    });
    return result;
}

console.log(map(square,[45, 12, 85, 21]));
