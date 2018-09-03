


function playSound(event) {
  console.log(event.keyCode);
//for keycodes, visit: keycode.info
//selector for an element that holds keyCode (HTML attribute: data-key)
//html attribute selectors are inside []
  var selector = 'audio[data‐key="' + keyCode + '"] ';
//keyCode assigns the key code of the pressed key to it
  var audio = document.querySelector(selector);
  var key = document.querySelector(`key[data-key="' + keyCode + '"]`);
  
//f any other key than one of the drum kit keys is pressed the audio variable=null
  if (audio !== null) {
    audio.currentTime = 0; //playing the audio file from the beginning
    audio.play();
    key.classList.add('playing'); // sama kuin: key.addClass('playing') (Jquery-format)
    //eli tällä saadaan aikaan animointiefekti
  }
}

function revertStyle(event) {
  if (event.propertyName === 'transform') {
      this.classList.remove('playing');
  }
}

var keys = document.querySelectorAll('.key'); //saadaan lista joka key'stä
keys.forEach(function(key) {  //lisätään eventLister jokaiseen kuuntelemaan koska transition-toiminto loppuu
  key.addEventListener('transitionend', revertStyle); //when event='transitioned', then running functon revertStyle
}
document.addEventListener('keydown', playSound);
