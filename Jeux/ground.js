import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.05
  const groundElems = document.querySelectorAll("[data-ground]")
  let test='';
  
  export function setupGround() {
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left", 300)
  }
  
  export function updateGround(delta, speedScale) {
    groundElems.forEach(ground => {
      incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)
      // incrementCustomProperty(ground, "--left", 0.5  * -1)
  console.log(test);
      if (getCustomProperty(ground, "--left") <= -200 || test!='test') {
        incrementCustomProperty(ground, "--left", 100)
        test='test'
      } else {
        incrementCustomProperty(ground, "--left", 0)
        console.log('object');
      }
    })
  }