// // Welcome!
// //
// //                                                  #    #
// //                                             %%% ##   ##
// //                                          %%%%% ###%🎀###
// //                                         %%%%% ### %%% #
// //                                       %%%%%% ### %%% ###
// //                                        %%%% ## %% #######
// //                                       %%%%% # %% #@#####
// //                                     %%%%%% # % #########
// //                                    %%%%% ##### #########
// //                          ###        %% ####### #########
// //                 %%% ############    ########### ########
// //              %%%% ############################### #######
// //            %%%%% ################################## ######
// //          %%%%%% #################################### #C###
// //         %%%🌸%% #####################################  ###
// //         %%%%% #######################################
// //        %%%%%% ############### BEANS ##################
// //     % %%%%%%% ############### BEANS ##################
// //      %%%%%%%%% ############## BEANS ##################
// //     %%%%%%%%%% ########################################
// //  %%% %%%%%%%%   ###### ################################
// //    %%%%%%%%      ###### #################### ##########
// // % %%%🌸%%%%        ####### ########### ###### ##########
// //  %%%%%%%%%         #######  ########### ###### ########
// // %%%%%%%%%%          ##### ###  ######### ####### ######
// //  %%%%%%%%%%          #### ##               ####### ####
// //  %🌸%%%%%%%%%           ## #                  ##### ###
// //   %%  %% % %%         # ##                      ## ###
// //     %   %    %        # ###                      # ###
// //                        # ###                     ## ###
// //                        # ###                     ## ###
// //                        # ####                   #### ##
// //                       ### ###                  ##### ###
// //                      ####  ###                 ####   ##
// //                     #####   ###                 ##    ##
// //                    #####    ####                      ###
// //                     ##        ###                     ###
// //                                ####                     ##
// //                                 ####                    ###
// //                                                         ####
// //                                                          ##
// //
// //------------------------- First day (Lab #2, Week 4) -------------------------//

// // Using an object, add at least 3 horses to your stables.
// //
// // The horses should have the following properties:
// // - name, nickname, favorite treat (string)
// // - age, monthly rent (number)
// // - location (boolean inside/outside)
// // - two unique properties of your choice (use any primitive)

// // Store the horses you've just created in a "horses" variable.
// // Keep your old horse info from week one for now.

// // Fancy! Another horse wants to be stabled! Create a variable that stores an object
// // literal of your new horse, and add it to your "horses" variable.

// // Initialize new property to your horses: a boolean that allows you to check if your horse
// // is hungry or not. Use dot notation.

// // let horseName = "Pooh"; // This is a variable that has a string primitive
// // let horseAge = 6;
// // let isHorseInStable = false;
// // let monthlyBoardingFee = 600;
// // let lateFee = monthlyBoardingFee * 0.2;

// // let welcomeMessage = "Welcome to my stables!";
// // let latePaymentMessage =
// //     "Your payment for " +
// //     horseName +
// //     " is late! You owe $" +
// //     (monthlyBoardingFee + lateFee) +
// //     ", or else!"; // concatenation, used + operator

// // console.log(welcomeMessage);
// // console.log(latePaymentMessage);

// let horses = {
//     Pooh: {
//         name: "Pooh",
//         nickname: "Winnie", // key nickname, value "Winnie" and they form a property
//         age: 6,
//         isHorseInStable: false,
//         treat: "honey",
//         rent: 600,
//         color: "Yellow",
//         style: "has a red top shirt",
//     },
//     Boog: {
//         name: "Boog",
//         nickname: "Boogie",
//         age: 4,
//         isHorseInStable: true,
//         treat: "fish",
//         rent: 500,
//         color: "dark green",
//         style: "has a round body",
//     },
//     Mak: {
//         name: "Mak",
//         nickname: "Juu",
//         age: 30,
//         isHorseInStable: true,
//         treat: "icecream",
//         rent: 1200,
//         color: "light green",
//         style: "has black hair",
//     },
// };

// let newHorse = {
//     name: "Hyo",
//     nickname: "Irene",
//     age: 30,
//     isHorseInStable: false,
//     treat: "cake",
//     rent: 1000,
//     color: "red",
//     style: "has long hair",
// };

// horses.Hyo = newHorse;

// horses.Pooh.isHorseHungry = true; // can also use horses["Pooh"]["isHorseHungry"] = true; for bracket notation
// horses.Boog.isHorseHungry = false;
// horses.Mak.isHorseHungry = false;
// horses.Hyo.isHorseHungry = true;

// //------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// // Create a variable that stores your total number of stalls.
// // Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// const NUMBER_OF_STALLS = 10;

// function availableStalls(numberOfStalls, numberOfHorses) {
//     // 1. figure out how many stalls are available
//     // 2. log that info out

//     let numberOfAvailableStalls = numberOfStalls - numberOfHorses;
//     console.log("There are " + numberOfAvailableStalls + " stalls available");
// }

// availableStalls(NUMBER_OF_STALLS, 4);

// // Create a function that logs out how much will an individual horse will owe if rent is
// // paid late. Invoke the function.

// function latePaymentNotice(horse) {
//     console.log(
//         "Your payment for " +
//             horse.name +
//             " is late! You owe $ " +
//             horse.rent * 0.2 +
//             ", plus the monthly fee of $" +
//             horse.rent +
//             "!"
//     );
// }

// latePaymentNotice(horses.Pooh); // this is a function call, and horses.Pooh is an argument, using the placeholder horse

// // Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// // the return value outside of the function.

// function gimmieThatNickname(horseName, horseNickname) {
//     // here I used parameters horseName and horseNickname
//     return (
//         "This is " +
//         horseName +
//         ", they are super cool, and their friends like to call them " +
//         horseNickname +
//         "!"
//     );
// } // And a function body, return ("This is...!")

// console.log(gimmieThatNickname(horses.Pooh.name, horses.Pooh.nickname));

// // let totalNumberOfStalls = 10;
// // function availableStalls(totalStalls, totalHorses) {
// //     console.log(
// //         "There are " + (totalStalls - totalHorses) + " stables available."
// //     );
// // }
// // availableStalls(10, 4);

// // function lateAmountByHorse(nameOfHorse) {
// //     let rent = horses[nameOfHorse].rent;
// //     let lateFee = rent * 0.2;
// //     let totalAmount = rent + lateFee;
// //     console.log("You owe me " + totalAmount + " if your rent is paid late.");
// // }
// // lateAmountByHorse("Pooh");
// // lateAmountByHorse("Boog");
// // lateAmountByHorse("Mak");
// // lateAmountByHorse("Hyo");

// // function getNickname(nameOfHorse) {
// //     let nickname = horses[nameOfHorse].nickname;
// //     return nickname;
// // }
// // console.log(getNickname("Pooh"));
// // console.log(getNickname("Boog"));
// // console.log(getNickname("Mak"));
// // console.log(getNickname("Hyo"));
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
let personal = "quiet";
for (i = 0; i < horses.length; i++) {
    if (horses[i]["personality"] === personal) {
        console.log(horses[i]["name"] + " is " + personal + "!");
    } else {
        console.log(horses[i]["name"] + " is not " + personal + "!");
    }
}
// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.
function moveHorsesOutside() {
    for (i = 0; i < horses.length; i++) {
        horses[i].isInside === true;
        console.log(
            horses[i]["name"] +
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
        if (horses[i].isInside === false) {
            horses[i].isInside = true;
            console.log(
                horses[i].name +
                    " was brought inside and has been fed " +
                    horses[i].favoriteTreat +
                    "!"
            );
        } else {
            console.log(
                horses[i].name +
                    " has been fed " +
                    horses[i].favoriteTreat +
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
        if (isDark === false) {
            if (horses[i].isInside === true) {
                horses[i].isInside = false;
                console.log(horses[i].name + "has been moved outside.");
            }
        }
        if (isDark === true) {
            if (horses[i].isInside === false) {
                horses[i].isInside = true;
                console.log(
                    horses[i].name + "has come inside because it's dark."
                );
            }
        }
    }
}

bedtime(true);
bedtime(false);

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
