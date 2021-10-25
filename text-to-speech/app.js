// HTML Elements
const playButton = document.getElementById("play-button")
const stopButton = document.getElementById("stop-button")
const pauseButton = document.getElementById("pause-button")
const textInput = document.getElementById("text")
const speedInput = document.getElementById("speed")

// Event Listeners
playButton.addEventListener('click', ()=>{
    playText(textInput.value);
})
pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)
// Functions
function playText(text){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    const utterance = new SpeechSynthesisUtterance(text)
    // rate is set to 1 if speedInput.value is null
    utterance.rate = speedInput.value || 1
    utterance.addEventListener('end', ()=>{
        textInput.disabled= false
    })
    textInput.disabled= true
    speechSynthesis.speak(utterance)
}

function pauseText(){
    if(speechSynthesis.speaking){
        speechSynthesis.pause()
    }
}

function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}