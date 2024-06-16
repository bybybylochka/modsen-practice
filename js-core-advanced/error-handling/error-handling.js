function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Error: parameter must be an integer");
    }
    return num;
}
try {
    console.log(checkInteger((97)));
    console.log(checkInteger(97.2));
} catch (error) {
    console.error(error.message);
}