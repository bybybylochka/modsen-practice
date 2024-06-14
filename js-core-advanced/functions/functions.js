function repeatOperation(operation, interval, maxExecutions = Infinity) {
    let executionCount = 0;
    const intervalId = setInterval(() => {
        operation(executionCount+1);
        executionCount++;
        if (executionCount >= maxExecutions) {
            clearInterval(intervalId);
        }
    }, interval);
    return intervalId;
}

const intervalId = repeatOperation(
    (executionCount)=>console.log(`Execute operation ${executionCount} times`),
    1000);
setTimeout(()=>{
    clearInterval(intervalId)
}, 11000);
