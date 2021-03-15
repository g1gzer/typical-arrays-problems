
exports.min = function min (arr) {
  return arr === undefined || arr.length == 0 ? 0 : Math.min( ...arr );
}

exports.max = function max (arr) {
    return arr === undefined || arr.length == 0 ? 0 : Math.max( ...arr );
}

exports.avg = function avg (arr) {
    return arr === undefined || arr.length == 0 ? 0 : arr.reduce((a, b) => (a + b)) / arr.length;
}
