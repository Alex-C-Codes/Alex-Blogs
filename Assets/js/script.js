var aAudio = document.getElementById('playSong');

function myAudioFunction(letter) {
    console.log("hello");
    if(letter == 'A') {
        aAudio.play();
    } else if(letter == 'b') {
        bAudio.play();
    }
}