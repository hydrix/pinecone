let crewStatus = 'read';

let computerStatusCode = 400;

let shuttleSpeed = 9000;

if (crewStatus === 'ready') {
    console.log("Crew Ready")
}
else {
    console.log('Crew Not Ready')
}



if (computerStatusCode <= 200) {
    console.log("Please stand by. Computer is rebooting.")
}
else if (computerStatusCode <= 400) {
    console.log('Success! Computer online.')
}
else {
    console.log('ALERT: Computer offline!')
}

if (shuttleSpeed >= 17500) {
    console.log("ALERT: Escape velocity reached!")
}
else if (shuttleSpeed <= 8000){
    console.log("ALERT: Cannot maintain orbit!")
}
else {
    console.log('Stable speed')
}