function addNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        const error = new Error('Invalid input: Both parameters must be numbers');
        throw error;
    }

    return num1 + num2;
}

try {
    const result = addNumbers(5, 10);
} catch (error) {
    console.error(error.message);
}
