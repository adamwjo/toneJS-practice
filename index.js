
const notes = [
    'C4', 'E4', 'G4', 'B4'
];

const synth = new Tone.Synth();
synth.toMaster();

let index = 0;

document.addEventListener('click', () => {
    playSound();
    Tone.Transport.start();
    setTimeout(() => {
        Tone.Transport.stop();
    }, 5000);
});

function playSound() {
    Tone.Transport.scheduleRepeat(time => {
        toneLooper(time);
    }, '4n');
};

function toneLooper(time) {
    let note = notes[index % notes.length]
    synth.triggerAttackRelease(note, '8n', time);
    index++
}






