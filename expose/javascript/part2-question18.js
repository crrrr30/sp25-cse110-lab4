const printCurrentTime = () => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};

// initial
printCurrentTime();

// every 1000ms, starting 1000ms from the time of
// execution of the following line.
setInterval(printCurrentTime, 1000);
