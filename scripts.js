// Write your JavaScript code here.
// Remember to pay attention to page loading!
// window.addEventListener("load",function(){

// })
//  function takeOff() {
//     let readyToTakeOff = confirm ("shuttle is ready for takeoff");
//     console.log("readyToTakeOff:-" + readyToTakeOff);
//     if (readyToTakeOff === true){
//      let flightStatus = document.getElementById("flightStatus")
//      flightStatus.innerHTML = "Shuttle in flight."
//      let shuttleBackGround = document.getElementById("shuttleBackground")
//     shuttleBackGround.style.backgroundColor = "blue"
//     let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
//     spaceShuttleHeight.innerHTML = '10,000'
//     }
//  }


//  function landing() {
//   let shuttleLanding  = alert ("The shuttle is landing. Landing gear engaged.");
//   console.log ("shuttleLanding:-" + shuttleLanding);
  
//       let landingStatus = document.getElementById("flightStatus");
//     flightStatus.innerHTML = "The shuttle has landed.";
//     let shuttleBackGround = document.getElementById("shuttleBackground")
//     shuttleBackGround.style.backgroundColor = "green"
//     let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
//     spaceShuttleHeight.innerHTML = '0'
  
//  }

//     function abort() {
//     let abort = confirm("Confirm that you want to abort the mission.")
//     let flightStatus = document.getElementById('flightStatus')
//     flightStatus.innerHTML = 'Mission aborted'
//     let shuttleBackGround = document.getElementById("shuttleBackground")
//     shuttleBackGround.style.backgroundColor = "green"
//     let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
//     spaceShuttleHeight.innerHTML = '0'
//     }

//     function up() {
//         //let rocket = document.getElementById("rocket")
//         let rocket = document.querySelector("#rocket")
//         rocket.style.position = 'relative'
//         rocket.style.top = (rocket.offsetTop-10) + "px"
//         //rocket.style.left = (rocket.offsetLeft) + "px"
    
//     }
    
//     function down() {
//         let rocket = document.getElementById("rocket")
//         rocket.style.position = 'relative'
//         rocket.style.top = (rocket.offsetTop+10) + "px"
//         //rocket.style.left = (rocket.offsetLeft) + "px"
//     }
    
//     function right() {
//         let rocket = document.getElementById("rocket")
//         rocket.style.position = 'absolute'
//         console.log("before right " + rocket.offsetLeft)
//         rocket.style.left = (rocket.offsetLeft+10) + "px"
//         console.log("after right " + rocket.offsetLeft)
//         //rocket.style.top = (rocket.offsetTop) + "px"
    
    
    
//     }
    
//     function left() {
//         let rocket = document.getElementById("rocket")
//         rocket.style.position = 'absolute'
//         console.log("before left " + rocket.offsetLeft)
    
//         rocket.style.left = (rocket.offsetLeft-10) + "px"
//         console.log("after left " + rocket.offsetLeft)
//         //rocket.style.top = (rocket.offsetTop) + "px"
    
    
    
//     }
window.addEventListener("load",function(){
    // command button elements
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    // direction button elements
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    // rocket element
    const rocket = document.getElementById("rocket");
    //added to make the rocket land and take off on command
    const flightStatus = document.getElementById("flightStatus");
    const flightScreen = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    //2
    takeOffButton.addEventListener("click", function(){
        //2a
        let isConfirmed = confirm("Is the shuttle ready for takeoff?");
        //2b,c,d
        if(isConfirmed){
            flightStatus.innerHTML = "Shuttle in flight";
            flightScreen.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10,000";
            rocket.style.bottom = "120 px";
            //move the rocket into the center of the square when take off    
        }
    });
    //3
    landingButton.addEventListener("click", function(){
        //3a,b,c,d
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        flightScreen.style.backgroundColor = "green";
        shuttleHeight.innerHTML ="0";
        rocket.style.bottom = "0";
        //land the rocket at the bottom of the square
    });
    //4
    abortButton.addEventListener("click", function(){
        let isConfirmed = confirm("Are you sure you want to abort the mission");
        if(isConfirmed){
            flightStatus.innerHTML = "Mission Aborted";
            flightScreen.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            //returning rocket to the original landing:
            rocket.style.bottom = "0";
        }
    });
    //5
    leftButton.addEventListener("click", function(){
        rocket.style.left = String(parseInt(rocket.style.left,10) - 10) + "px";
    });
    rightButton.addEventListener("click", function(){
        rocket.style.left = String(parseInt(rocket.style.left,10) + 10) + "px";
    });
    upButton.addEventListener("click", function(){
        rocket.style.bottom = string(parseInt(rocket.style.bottom,10) + 10) + "px";
    });
    downButton.addEventListener("click", function(){
        rocket.style.bottom = string(parseInt(rocket.style.bottom,10) - 10) + "Px";
    });
})
    