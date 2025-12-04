//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
let horses = [];
// Create a variable and use it to store a message that welcomes visitors to the stable.
let welcomeMessage = "Welcome to Tommy's stable!";
// Create a variable and use it to store the cost of a late payment fee.
let latePaymentFee = 100;
// Create a variable and use it to store the number of available stalls in the stable.
let availableStalls = 7;

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice
function Horse(
    name,
    nickname,
    favoriteTreat,
    age,
    monthlyRent,
    isInside,
    personality,
    color,
    isHungry
) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.personality = personality;
    this.color = color;
    this.isHungry = isHungry;
    this.introduce = function () {
        console.log(
            "The name of this horse is " +
                this.name +
                " and his nickname is " +
                this.nickname +
                ". He loves " +
                this.favoriteTreat +
                "!"
        );
    };
    this.character = function () {
        console.log(
            this.name + " is " + this.color + " and " + this.personality + "!"
        );
    };
}

let Pooh = new Horse(
    "Pooh",
    "Winnie",
    "honey",
    7,
    700,
    false,
    "energetic",
    "yellow",
    true
);
let Boog = new Horse(
    "Boog",
    "Boogie",
    "fish",
    3,
    300,
    true,
    "quiet",
    "green",
    false
);
let Irene = new Horse(
    "Irene",
    "Hyo",
    "cake",
    30,
    900,
    true,
    "aggressive",
    "purple",
    true
);

// Store the horses you've just created in your "horses" variable.
horses.push(Pooh, Boog, Irene);
// Fancy! Another horse wants to be stabled! Create a variable that stores an object
let Maro = {
    name: "Maro",
    nickname: "Bee",
    favoriteTreat: "milk",
    age: 9,
    monthlyRent: 500,
    isInside: false,
    personality: "fearless",
    color: "white",
    isHungry: true,
    introduce: function () {
        console.log(
            "The name of this horse is " +
                this.name +
                " and his nickname is " +
                this.nickname +
                ". He loves " +
                this.favoriteTreat +
                "!"
        );
    },
    character: function () {
        console.log(
            this.name + " is " + this.color + " and " + this.personality + "!"
        );
    },
};

// literal of your new horse, and add it to your "horses" variable.
horses.push(Maro);
// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.
//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.
// horses = [
//     {
//         name: "Pooh",
//         nickname: "Winnie",
//         favoriteTreat: "honey",
//         age: 7,
//         monthlyRent: 700,
//         isInside: false,
//         personality: "energetic"
//         color: "yellow",
//         isHungry: true,
//         introduce: [function],
//         character: [function]
//     },
//     {
//         name: "Boog",
//         nickname: "Boogie",
//         favoriteTreat: "fish",
//         age: 3,
//         monthlyRent: 300,
//         isInside: true,
//         personality: "quiet"
//         color: "green",
//         isHungry: false,
//         introduce: [function],
//         character: [function]
//     },
//     {
//         name: "Irene",
//         nickname: "Hyo",
//         favoriteTreat: "cake",
//         age: 30,
//         monthlyRent: 900,
//         isInside: true,
//         personality: "aggressive"
//         color: "purple",
//         isHungry: true,
//         introduce: [function],
//         character: [function]
//     },
//     {
//         name: "Maro",
//         nickname: "Bee",
//         favoriteTreat: "milk",
//         age: 9,
//         monthlyRent: 500,
//         isInside: false,
//         personality: "fearless"
//         color: "white",
//         isHungry: true,
//         introduce: [function],
//         character: [function]
//     },
// ];

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.
availableStalls = availableStalls - horses.length;

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"
if (availableStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log("We have " + availableStalls + " available!");
}

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.
function latePayment(horse) {
    console.log(
        "If your payment is late for " +
            horse.name +
            ", you need to pay " +
            latePaymentFee +
            " on top of the monthly rent of " +
            horse.monthlyRent +
            "."
    );
}
latePayment(Pooh);
// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.
let treat = "cake";
for (i = 0; i < horses.length; i++) {
    if (horses[i]["favoriteTreat"] === treat) {
        console.log(horses[i]["name"] + " loves " + treat + "!");
    } else {
        console.log(
            horses[i]["name"] +
                " stares at you after looking at the " +
                treat +
                "."
        );
    }
}
// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.
function getNickname(horses) {
    return horses.nickname;
}
console.log("Nickname: " + getNickname(Irene));
//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.
let personalityTrait = "quiet";
for (i = 0; i < horses.length; i++) {
    let currentHorse = horses[i];
    if (currentHorse.personality === personalityTrait) {
        console.log(currentHorse.name + " is " + personalityTrait + "!");
    } else {
        console.log(currentHorse.name + " is not " + personalityTrait + "!");
    }
}
// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.
function moveHorsesOutside() {
    for (i = 0; i < horses.length; i++) {
        let currentHorse = horses[i];
        currentHorse.isInside === true;
        console.log(
            currentHorse.name +
                " has been moved outside to spend time in the sun."
        );
    }
}
moveHorsesOutside();
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.
for (i = 0; i < horses.length; i++) {
    horses[i].moveHorse = function () {
        if (this.isInside === true) {
            this.isInside = false;
            console.log(this.name + " was inside, now moved outside.");
        } else {
            this.isInside = true;
            console.log(this.name + "was outside, now moved inside.");
        }
    };
}

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.
function feedHorses() {
    for (i = 0; i < horses.length; i++) {
        let currentHorse = horses[i];
        if (!currentHorse.isInside) {
            currentHorse.isInside = true;
            console.log(
                currentHorse.name +
                    " was brought inside and has been fed " +
                    currentHorse.favoriteTreat +
                    "!"
            );
        } else {
            console.log(
                currentHorse.name +
                    " has been fed " +
                    currentHorse.favoriteTreat +
                    "!"
            );
        }
    }
}
feedHorses();
// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.
function bedtime(isDark) {
    for (i = 0; i < horses.length; i++) {
        let currentHorse = horses[i];
        if (!isDark) {
            if (currentHorse.isInside === true) {
                currentHorse.isInside = false;
                console.log(currentHorse.name + "has been moved outside.");
            }
        }
        if (isDark === true) {
            if (currentHorse.isInside === false) {
                currentHorse.isInside = true;
                console.log(
                    currentHorse.name + "has come inside because it's dark."
                );
            }
        }
    }
}

bedtime(true);
bedtime(false);

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
