const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type your hero's name: ", function (name) {
    rl.question("Enter the amount of XP: ", function (XP) {
        XP = parseInt(XP);

        let level = "";

        if (XP < 1000) {
            level = "Iron";
        } else if (XP >= 1000 && XP <= 2000) {
            level = "Bronze";
        } else if (XP >= 2001 && XP <= 5000) {
            level = "Silver"; 
        } else if (XP >= 5001 && XP <= 7000) {
            level = "Gold";
        } else if (XP >= 7001 && XP <= 8000) {
            level = "Platinum";
        } else if (XP >= 8001 && XP <= 9000) {
            level = "Ascendant";
        } else if (XP >= 9001 && XP <= 10000) {
            level = "Immortal";
        } else if (XP >= 10001) { 
            level = "Radiant";
        }

        console.log("The hero named",name, "is at level",level);
        
        rl.close();
    });
});
