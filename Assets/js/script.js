var aAudio = document.getElementById('playSong');

function myAudioFunction(letter) {
    console.log("hello");
    console.log("everything is going to be ok, my friend :)");
    if(letter == 'A') {
        aAudio.play();
    } else if(letter == 'b') {
        bAudio.play();
    }
}