function matrixElementsSum(matrix) {
    let sum = 0;

    // Edge case for if there is only one row in the matrix (add values placed at each index to sum)
    if (matrix.length === 1) {
        for (let i = 0; i <= matrix[0].length - 1; i++) {
            sum += matrix[0][i];
        }
    } else {
        for (let col = 0; col <= matrix[0].length - 1; col++) {
            for (let row = 0; row <= matrix.length - 1; row++) {
                // 0 means end of the road, break out of the loop
                if (matrix[row][column] === 0) {
                    sum += 0;
                    break;
                } else {
                    // Otherwise, add each cel's value to the sum and return when done
                    sum += matrix[row][col];
                }
            }
        }
    }
    return sum;
}
