function delayedCallback(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
    console.log("Waiting for callback...");
}

delayedCallback(()=>{
    console.log("Callback executed!");
})