function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let result = new Array()
    for(i=1;i<arr.length;i+=2){
        result.push(arr[i])
    }
    return result
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let result = new Array()
    if (arr.length % 2 === 0) {
        let i = arr.length - 2
    }
    else {
        let i = arr.length - 1
    }
    for (i; i<0; i-=2){
        result.push(arr[i])
    }
    return result
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let result = new Array()
    for (i=1; i < arr.length; i = Math.pow(i,2)) {
        result.push(arr[i])
    }
    return result
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let result = new Array()
    for (i=1; i<arr.length; i= Math.pow(i,n)) {
        result.push(i)
    }
    return result
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let result = new Array()
    for (i = 0; i < Math.ceil(arr.length / 2); i++){
        result.push(arr[i])
    }
    return result
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let result = new Array()
    for (i= Math.ceil(arr.length / 2); i<arr.length; i++){
        result.push(arr[i])
    }
    return result
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
