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
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

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

let horseName = "Pooh";
let horseAge = 6;
let isHorseInStable = false;
let monthlyBoardingFee = 600;
let feeForLatePayment = monthlyBoardingFee + monthlyBoardingFee * 0.2;

let messageForVisitors =
    "This horse is named " +
    horseName +
    " and his age is " +
    horseAge +
    "." +
    " The monthly cost to board " +
    horseName +
    " is " +
    monthlyBoardingFee +
    " CAD.";

let latePaymentMessage =
    "Your monthly boarding payment for " +
    horseName +
    " is overdue, and your outstanding balance is " +
    feeForLatePayment +
    " CAD.";

console.log(messageForVisitors);
console.log(latePaymentMessage);

let horseOneObj = {
    name: "Pooh",
    nickname: "Winnie",
    favouriteTreat: "honey",
    age: 6,
    monthlyRent: 600,
    isHorseInStable: false,
    personality: "active",
    weight: 10,
};

let horseTwoObj = {
    name: "Boog",
    nickname: "Boogie",
    favouriteTreat: "fish",
    age: 4,
    monthlyRent: 500,
    isHorseInStable: true,
    personality: "calm",
    weight: 3,
};

let horseThreeObj = {
    name: "Irene",
    nickname: "Hyo",
    favouriteTreat: "cake",
    age: 20,
    monthlyRent: 900,
    isHorseInStable: true,
    personality: "friendly",
    weight: 50,
};
let horses = [horseOneObj, horseTwoObj, horseThreeObj];

let horseFourObj = {
    name: "Juu",
    nickname: "Tom",
    favouriteTreat: "icecream",
    age: 30,
    monthlyRent: 1100,
    isHorseInStable: false,
    personality: "lazy",
    weight: 70,
};
horses.push(horseFourObj);
horseOneObj.isHorseHungry = true;
horseTwoObj.isHorseHungry = false;
horseThreeObj.isHorseHungry = false;
horseFourObj.isHorseHungry = true;

console.log(horses);
