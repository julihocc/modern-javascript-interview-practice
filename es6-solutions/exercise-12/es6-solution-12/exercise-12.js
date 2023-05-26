function adjustTimestamp(initialTimestamp, shiftMagnitude, shiftUnit) {
    let givenTimestamp = new Date(initialTimestamp);
    let adjusterValue;

    if (shiftUnit == 'day' || shiftUnit == 'days') {
        adjusterValue = shiftMagnitude * 24 * 60 * 60 * 1000; // days to milliseconds
        givenTimestamp.setTime(givenTimestamp.getTime() + adjusterValue);
    }
    else if (shiftUnit == 'week' || shiftUnit == 'weeks') {
        adjusterValue = shiftMagnitude * 7 * 24 * 60 * 60 * 1000; // weeks to milliseconds
        givenTimestamp.setTime(givenTimestamp.getTime() + adjusterValue);
    }
    else if (shiftUnit == 'month' || shiftUnit == 'months') {
        givenTimestamp.setMonth(givenTimestamp.getMonth() + shiftMagnitude);
    }
    else if (shiftUnit == 'hour' || shiftUnit == 'hours') {
        adjusterValue = shiftMagnitude * 60 * 60 * 1000; // hours to milliseconds
        givenTimestamp.setTime(givenTimestamp.getTime() + adjusterValue);
    }
    else if (shiftUnit == 'minute' || shiftUnit == 'minutes') {
        adjusterValue = shiftMagnitude * 60 * 1000; // minutes to milliseconds
        givenTimestamp.setTime(givenTimestamp.getTime() + adjusterValue);
    }
    else if (shiftUnit == 'second' || shiftUnit == 'seconds') {
        adjusterValue = shiftMagnitude * 1000; // seconds to milliseconds
        givenTimestamp.setTime(givenTimestamp.getTime() + adjusterValue);
    }
    else {
        console.log("Sorry, I didn't get that. Could you try with 'day', 'week', 'month', 'hour', 'minute', or 'second'?");
        return;
    }

    return givenTimestamp;
}

let currentTimestamp = new Date();
console.log("Now it's: " + currentTimestamp);

let shiftedTimestamp = adjustTimestamp(currentTimestamp, -1, 'day');
console.log("24 hours earlier it was: " + shiftedTimestamp);

shiftedTimestamp = adjustTimestamp(currentTimestamp, 2, 'months');
console.log("Two months from now it'll be: " + shiftedTimestamp);

shiftedTimestamp = adjustTimestamp(currentTimestamp, 45, 'minutes');
console.log("45 minutes later it'll be: " + shiftedTimestamp);
