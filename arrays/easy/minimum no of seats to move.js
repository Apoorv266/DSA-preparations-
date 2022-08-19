var minMovesToSeat = function (seats, students) {
    seats.sort(function(a, b){return a - b});
    students.sort(function(a, b){return a - b});
    let counter = 0
 
        for (let j = 0; j < seats.length; j++) {
            let temp = students[j] - seats[j]
            if (temp < 0) {
                temp = Math.abs(temp)
            }
           counter = counter + temp
        }
 
   return counter
};

console.log(minMovesToSeat([12,14,19,19,12], [19,2,17,20,7]))

