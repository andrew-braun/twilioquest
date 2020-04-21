//The solution that's runnable from the command line/more flexible (doesn't work with TwilioQuest)
const arg1 = process.argv[2].toString();

const getLaserSetting = (request) => {
    let splitRequest = request.toLowerCase().split(" ");
    if (splitRequest[0] == "please") {
        return("OFF")
    } else {
        return("ON")
    }
}

const checkCurrentSetting = getLaserSetting(arg1);
console.log(`The laser is now ${checkCurrentSetting}`);




// The solution that works with Twilio

// const getLaserSetting = (request) => {
//     let splitRequest = request;
//     if (splitRequest === "please") {
//         return("OFF")
//     } else {
//         return("ON")
//     }
// }