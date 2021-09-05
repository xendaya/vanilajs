const songs = document.querySelectorAll('audio');
const divs = document.querySelectorAll('.container div');

window.addEventListener('keydown', (e) =>{
    // The KeyCode.
    let code = e.keyCode.toString();

    // Playing the audio if the keyCode is equal to the audio's ID.
    songs.forEach(song =>{
        if(code === song.id){
            song.play();
            song.currentTime = 0;
        }
    });

    // Adding the animation to the divs if the keyCode is equal to the div's ID.
    divs.forEach(div =>{
        if(code === div.id){
            div.classList.add('animate');
            setTimeout( () => div.classList.remove('animate'), 100);
        }
    })
});