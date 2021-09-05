const songs = document.querySelectorAll('audio');
const divs = document.querySelectorAll('.container div');

window.addEventListener('keydown', (e) =>{
    let code = e.keyCode.toString();

    
    songs.forEach(song =>{
        if(code === song.id){
            song.play();
            song.currentTime = 0;
        }
    });

    divs.forEach(div =>{
        if(code === div.id){
            div.classList.add('animate');
            setTimeout( () => div.classList.remove('animate'), 100);
        }
    })
});
