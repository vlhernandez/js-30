function keyPress(e) {
  const keyCode = document.querySelector(`[data-key="${e.keyCode}"]`)
  if(!keyCode) return;

  keyCode.classList.add("highlight")
  playSound(e.keyCode);
}

function playSound( code ) {
  const sound = document.querySelector(`audio[data-key="${code}"]`);
  sound.currentTime = 0;
  sound.play();
}

function removeHighlight( e ) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("highlight");
}

document.addEventListener( 'keydown', keyPress );
const keys = document.querySelectorAll(".keys p");
keys.forEach( key => {
  key.addEventListener( 'transitionend', removeHighlight);
});
