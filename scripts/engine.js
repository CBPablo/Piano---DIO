const pianoKeys = document.querySelectorAll(".piano-kays .key")
let audio = new Audio("./tunes/w.wav")

const playtune = (key) => {
   audio.src =  `./tunes/${key}.wav`
    audio.play()
};
pianoKeys.forEach((key) => {
    console.log(key.dataset.key)
    key.addEventListener("click", () => playtune(key.dataset.key))
})