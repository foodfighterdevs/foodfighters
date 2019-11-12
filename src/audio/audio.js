
import hit1 from "./slightscream-01.flac";
import hit2 from "./slightscream-02.flac";
import hit3 from "./slightscream-03.flac";
import hit4 from "./slightscream-04.flac";
import hit5 from "./slightscream-05.flac";
import hit6 from "./slightscream-06.flac";
import hit7 from "./slightscream-07.flac";
import hit8 from "./slightscream-08.flac";
import hit9 from "./slightscream-09.flac";
import hit10 from "./slightscream-10.flac";
import hit11 from "./slightscream-11.flac";
import hit12 from "./slightscream-12.flac";
import hit13 from "./slightscream-13.flac";
import hit14 from "./slightscream-14.flac";
import hit15 from "./slightscream-15.flac";
import death1 from "./wilhelm.mp3";

const hit = [];
hit.push( new Audio(hit1) );
hit.push( new Audio(hit2) );
hit.push( new Audio(hit3) );
hit.push( new Audio(hit4) );
hit.push( new Audio(hit5) );
hit.push( new Audio(hit6) );
hit.push( new Audio(hit7) );
hit.push( new Audio(hit8) );
hit.push( new Audio(hit9) );
hit.push( new Audio(hit10) );
hit.push( new Audio(hit11) );
hit.push( new Audio(hit12) );
hit.push( new Audio(hit13) );
hit.push( new Audio(hit14) );
hit.push( new Audio(hit15) );
const death = [];
death.push( new Audio(death1) );

function onHit() {
    let choice = (Math.floor(Math.random() * 15)) // 0.5 second to 1.5 seconds
    hit[choice].play();
};

function onDeath(){
    death[0].play();
}

export default {onHit, onDeath};