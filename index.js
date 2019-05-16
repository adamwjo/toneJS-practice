
const notes = [
    'C4', 'E4', 'G4', 'B4'
]

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', () => {
        playSound()

    })
});



function playSound() {
    //instantiate a new synth
    
    console.log(Tone.Transport.bpm.value)
    
    const synth = new Tone.Synth()
    synth.toMaster();
    
    Tone.Transport.schedule(function(time){
        for (let note of notes) {
            synth.triggerAttackRelease(note, '8n', time)
            console.log(time)
        }
    }, "8n");
    
    Tone.Transport.start();
    setTimeout(500, () => {
        Tone.Transport.stop();
    })
};



