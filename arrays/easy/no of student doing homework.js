var busyStudent = function (startTime, endTime, queryTime) {
    let counter = 0
    for (let i = 0; i < endTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {

            counter++;
        }

    }
    return counter

};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4))