'use strict'

function buttonClicked(){
  // variables for radius, from user's input 
  let radius = parseFloat(document.getElementById("radius").value)
  
  // calculates the volume of a sphere
  let volume = (3 / 4 * Math.PI * radius ** 3)

  // displays the answer
  document.getElementById('answer').innerHTML = "The volume is: " + volume.toFixed(2)
}