function saturdayFun(running){
    let activity = running || 'roller-skate';
    return ('This Saturday, I want to '+activity+'!')
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(sign='||'){
    return function(adjective='a programmer'){
        return `You are ${sign}${adjective}${sign}!`;
}
}