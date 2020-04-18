const letter1 = process.argv[2].toString().toLowerCase();
const letter2 = process.argv[3].toString().toLowerCase();

if (letter1 < letter2) {
    console.log(-1);
} else if (letter1 == letter2) {
    console.log(0);
} else if (letter1 > letter2) {
    console.log(1);
} 