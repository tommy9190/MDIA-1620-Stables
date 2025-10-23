// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

// let horseName = "Pooh"; // This is a variable that has a string primitive
// let horseAge = 6;
// let isHorseInStable = false;
// let monthlyBoardingFee = 600;
// let lateFee = monthlyBoardingFee * 0.2;

// let welcomeMessage = "Welcome to my stables!";
// let latePaymentMessage =
//     "Your payment for " +
//     horseName +
//     " is late! You owe $" +
//     (monthlyBoardingFee + lateFee) +
//     ", or else!"; // concatenation, used + operator

// console.log(welcomeMessage);
// console.log(latePaymentMessage);

let horses = {
    Pooh: {
        name: "Pooh",
        nickname: "Winnie", // key nickname, value "Winnie" and they form a property
        age: 6,
        isHorseInStable: false,
        treat: "honey",
        rent: 600,
        color: "Yellow",
        style: "has a red top shirt",
    },
    Boog: {
        name: "Boog",
        nickname: "Boogie",
        age: 4,
        isHorseInStable: true,
        treat: "fish",
        rent: 500,
        color: "dark green",
        style: "has a round body",
    },
    Mak: {
        name: "Mak",
        nickname: "Juu",
        age: 30,
        isHorseInStable: true,
        treat: "icecream",
        rent: 1200,
        color: "light green",
        style: "has black hair",
    },
};

let newHorse = {
    name: "Hyo",
    nickname: "Irene",
    age: 30,
    isHorseInStable: false,
    treat: "cake",
    rent: 1000,
    color: "red",
    style: "has long hair",
};

horses.Hyo = newHorse;

horses.Pooh.isHorseHungry = true; // can also use horses["Pooh"]["isHorseHungry"] = true; for bracket notation
horses.Boog.isHorseHungry = false;
horses.Mak.isHorseHungry = false;
horses.Hyo.isHorseHungry = true;

//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

const NUMBER_OF_STALLS = 10;

function availableStalls(numberOfStalls, numberOfHorses) {
    // 1. figure out how many stalls are available
    // 2. log that info out

    let numberOfAvailableStalls = numberOfStalls - numberOfHorses;
    console.log("There are " + numberOfAvailableStalls + " stalls available");
}

availableStalls(NUMBER_OF_STALLS, 4);

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

function latePaymentNotice(horse) {
    console.log(
        "Your payment for " +
            horse.name +
            " is late! You owe $ " +
            horse.rent * 0.2 +
            ", plus the monthly fee of $" +
            horse.rent +
            "!"
    );
}

latePaymentNotice(horses.Pooh); // this is a function call, and horses.Pooh is an argument, using the placeholder horse

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

function gimmieThatNickname(horseName, horseNickname) {
    // here I used parameters horseName and horseNickname
    return (
        "This is " +
        horseName +
        ", they are super cool, and their friends like to call them " +
        horseNickname +
        "!"
    );
} // And a function body, return ("This is...!")

console.log(gimmieThatNickname(horses.Pooh.name, horses.Pooh.nickname));

// let totalNumberOfStalls = 10;
// function availableStalls(totalStalls, totalHorses) {
//     console.log(
//         "There are " + (totalStalls - totalHorses) + " stables available."
//     );
// }
// availableStalls(10, 4);

// function lateAmountByHorse(nameOfHorse) {
//     let rent = horses[nameOfHorse].rent;
//     let lateFee = rent * 0.2;
//     let totalAmount = rent + lateFee;
//     console.log("You owe me " + totalAmount + " if your rent is paid late.");
// }
// lateAmountByHorse("Pooh");
// lateAmountByHorse("Boog");
// lateAmountByHorse("Mak");
// lateAmountByHorse("Hyo");

// function getNickname(nameOfHorse) {
//     let nickname = horses[nameOfHorse].nickname;
//     return nickname;
// }
// console.log(getNickname("Pooh"));
// console.log(getNickname("Boog"));
// console.log(getNickname("Mak"));
// console.log(getNickname("Hyo"));
