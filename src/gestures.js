const { GestureDescription, Finger, FingerCurl, FingerDirection} = window.fp;
  


const RockGesture = new GestureDescription('rock'); // ✊️
const PaperGesture = new GestureDescription('maoAberta'); // 🖐
const ScissorsGesture = new GestureDescription('scissors'); // ✌️
const EuAmoVoce = new GestureDescription('amoVoce'); // ✌️
const MeLiga = new GestureDescription('meLiga');
const Arma = new GestureDescription('arma');

// Rock
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
RockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5); 




// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    RockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    RockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}




// Paper
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    PaperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors
//------------------------------------------------------------------------------
  
// index and middle finger: stretched out
ScissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ScissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  
// ring: curled
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// Eu te amo
//------------------------------------------------------------------------------

//dedão um pouco esticado
EuAmoVoce.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);


//dedo indicador totalmente esticado
EuAmoVoce.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

//dedo médio recuado, porém não totalmente
EuAmoVoce.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
EuAmoVoce.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

//n sei o nome desse dedo, mas é o mesmo caso do anterior
EuAmoVoce.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
EuAmoVoce.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

//dedo mindinho totalmente esticado
EuAmoVoce.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
EuAmoVoce.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// Me liga
//------------------------------------------------------------------------------

//dedão um pouco esticado
MeLiga.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
MeLiga.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

//dedo indicador totalmente recuado
MeLiga.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
MeLiga.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

//dedo médio recuado, porém não totalmente
MeLiga.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
MeLiga.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

//n sei o nome desse dedo, mas é o mesmo caso do anterior
MeLiga.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
MeLiga.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

//dedo mindinho totalmente esticado
MeLiga.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
MeLiga.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// arma
//------------------------------------------------------------------------------

//dedão um pouco esticado
Arma.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

//dedo indicador totalmente recuado
Arma.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Arma.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

//dedo médio recuado, porém não totalmente
Arma.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Arma.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

//n sei o nome desse dedo, mas é o mesmo caso do anterior
Arma.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Arma.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

//dedo mindinho totalmente esticado
Arma.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Arma.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);



const gestures = [
    RockGesture, PaperGesture, ScissorsGesture, EuAmoVoce, Arma
]

export {
    gestures
}