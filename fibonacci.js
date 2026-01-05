/**
 * Function to generate Fibonacci series up to n terms
 * @param {number} n - Number of terms in the Fibonacci series
 * @returns {number[]} - Array containing the Fibonacci series
 */
function fibonacciSeries(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Example usage:
const n = 10; // Number of terms
const series = fibonacciSeries(n);
console.log(`Fibonacci series up to ${n} terms:`, series);
