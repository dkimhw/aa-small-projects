function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddIdxs = []

    for (let idx = 1; idx < arr.length; idx += 2) oddIdxs.push(arr[idx])
    return oddIdxs;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddIdxs = []

    for (let idx = 1; idx < arr.length; idx += 2) oddIdxs.push(arr[idx])
    return oddIdxs.reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    // function isPowerofTwo(v) {
    //     return v && !(v & (v - 1));
    // }

    const isPowerOfTwo = function(n) {
        if(n == 0) return false;

        while(n % 2 == 0){
            n = n/2
        }
        return n === 1
    };

    let powerOfTwo = []

    return arr.filter((idx, el) => isPowerOfTwo(el));
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    function powerOfN(num, n) {
        if(num == 0) return false;

        while(num % n == 0){
            num = num/n
        }
        return num === 1
    }

    return arr.filter((idx, el) => powerOfN(el, n));
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here

    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr.slice(0, mid + 1) : arr.slice(0, mid);
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr.slice(mid + 1) : arr.slice(mid);
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
