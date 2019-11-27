// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){

})
 function takeOff() {
    let readyToTakeOff = confirm ("shuttle is ready for takeoff");
    console.log("readyToTakeOff:-" + readyToTakeOff);
    if (readyToTakeOff === true){
     let flightStatus = document.getElementById("flightStatus")
     flightStatus.innerHTML = "Shuttle in flight."
     let shuttleBackGround = document.getElementById("shuttleBackground")
    shuttleBackGround.style.backgroundColor = "blue"
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    spaceShuttleHeight.innerHTML = '10,000'
    }
 }


 function landing() {
  let shuttleLanding  = alert ("The shuttle is landing. Landing gear engaged.");
  console.log ("shuttleLanding:-" + shuttleLanding);
  
      let landingStatus = document.getElementById("flightStatus");
    flightStatus.innerHTML = "The shuttle has landed.";
    let shuttleBackGround = document.getElementById("shuttleBackground")
    shuttleBackGround.style.backgroundColor = "green"
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    spaceShuttleHeight.innerHTML = '0'
  
 }

    function abort() {
    let abort = confirm("Confirm that you want to abort the mission.")
    let flightStatus = document.getElementById('flightStatus')
    flightStatus.innerHTML = 'Mission aborted'
    let shuttleBackGround = document.getElementById("shuttleBackground")
    shuttleBackGround.style.backgroundColor = "green"
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    spaceShuttleHeight.innerHTML = '0'
    }

    function up() {
        //let rocket = document.getElementById("rocket")
        let rocket = document.querySelector("#rocket")
        rocket.style.position = 'relative'
        rocket.style.top = (rocket.offsetTop-10) + "px"
        //rocket.style.left = (rocket.offsetLeft) + "px"
    
    }
    
    function down() {
        let rocket = document.getElementById("rocket")
        rocket.style.position = 'relative'
        rocket.style.top = (rocket.offsetTop+10) + "px"
        //rocket.style.left = (rocket.offsetLeft) + "px"
    }
    
    function right() {
        let rocket = document.getElementById("rocket")
        rocket.style.position = 'absolute'
        console.log("before right " + rocket.offsetLeft)
        rocket.style.left = (rocket.offsetLeft+10) + "px"
        console.log("after right " + rocket.offsetLeft)
        //rocket.style.top = (rocket.offsetTop) + "px"
    
    
    
    }
    
    function left() {
        let rocket = document.getElementById("rocket")
        rocket.style.position = 'absolute'
        console.log("before left " + rocket.offsetLeft)
    
        rocket.style.left = (rocket.offsetLeft-10) + "px"
        console.log("after left " + rocket.offsetLeft)
        //rocket.style.top = (rocket.offsetTop) + "px"
    
    
    
    }