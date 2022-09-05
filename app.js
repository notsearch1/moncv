
// Animation écriture
function text(){
    const txtAnim = document.querySelector('.txt-animation');
    
    let typewriter = new Typewriter(txtAnim,  {
        loop: false,
        deleteSpeed: 20
    })
    
    typewriter 
    .pauseFor(2300)
    .changeDelay(20)
    .typeString('Je suis Elodie, Développeuse')
    .pauseFor(1000)
    .typeString('<span style="color: tomato;"><br> JavaScript</span> !')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('<span style="color: tomato;"> React</span> !')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('<span style="color: tomato;"> PHP et Symfony</span> !')
    .start()
}
window.onload = function() { 
    text()
  };


