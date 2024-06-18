function actAsyncOperations() {
    return new Promise((resolve, reject) => {
        console.log("Start");
        setTimeout(() => resolve(1), 2000);
    }).then((result)=> {
        console.log(result);
        return result + Math.floor(Math.random() * 10) + 1;

    }).then((result) => {
        console.log(result);
        return result + Math.floor(Math.random() * 10) + 1;

    }).then((result)=> {
        console.log(result);
        return result + Math.floor(Math.random() * 10) + 1;

    }).finally(() => {
        console.log("End");
    });
}
actAsyncOperations()
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
        console.error("Error:", error);
    });