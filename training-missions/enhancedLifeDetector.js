const argVal = process.argv[2];

if (Number(argVal) == 0) {
    console.log("alive");
} else if (Number(argVal) == 1) {
    console.log("flowering");
} else if (Number(argVal) == 2) {
    console.log("shedding");
} else if (Number(argVal) == 3) {
    console.log("other");
} 
