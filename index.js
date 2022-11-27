// code your solution here

let mondayWork = function(task="go to the office") {
    return `This Monday, I will ${task}.`;

}

function saturdayFun(rollers = "roller-skate") {
 
    const innerFunc = function() {
        return `This Saturday, I want to ${rollers}!`;
    };
    return innerFunc();
}


function wrapAdjective(flair = "*") {
    return function(message = "special") {
        return console.log(`You are ${flair}${message}${flair}!`);

    };

}
//wrapAdjective("||")("a dedicated programmer");
