// Map the array's item/index, multiply each item times adjacent, sort high to low, return 0
function adjacentElementsProduct(arr) {
    return arr.map((item, index) => item * arr[index + 1]).sort((a, b) => b - a)[0];
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.