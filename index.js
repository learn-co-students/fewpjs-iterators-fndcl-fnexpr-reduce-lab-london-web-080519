const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
function addSum(a,b) {
    return a+b
}

function addBatteries (arr) {
    return arr.reduce(addSum, 0);
}

let totalBatteries = addBatteries(batteryBatches);
