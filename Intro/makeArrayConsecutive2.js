// Input: 6, 2, 3, 8
// Missing: 4, 5, 7

function makeArrayConsecutive2(statuses) {
    let sorted = statuses.sort((a, b) => b - a);
    // 8, 6, 3, 2
    let count = 0;

    // Loop to find elements that are more than 1 apart
    for (let i = 0; i < sorted.length - 1; i++) {
        // Add any difference (minus 1 for acceptable gap) to count
        count += (sorted[i] - sorted[i + 1]) - 1;
        // 8 - 6 - 1 = 1
        // 6 - 3 - 1 = 2 (3)
        // 3 - 2 - 1 = 0 (3)
    }

    return count;
    // Returns 3
}
// Correct: array is missing 4, 5, and 7; thus, the "count" should equal 3