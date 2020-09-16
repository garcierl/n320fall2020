class Instrument {
    constructor(family, verb, loudness){
        this.family  = family;
        this.verb = verb;
        this.loudness = loudness;
    }

    playInstrument() {
            console.log(this.family + this.verb + " at " + this.loudness + " dB")
    }

}

class Woodwind extends Instrument{
    constructor(family, verb){
        super(family, verb, 10);
    }
}

class String extends Instrument{
    constructor(family, verb){
        super(family, verb, 15)
    }
}

class Percussion extends Instrument{
    constructor(family, verb){
        super(family, verb, 20)
    }
}

var ww = new Woodwind("clarinet", " blown");
var guitar = new String("yahmaha", " strung");
var perc = new Percussion("drums", " hit");
ww.playInstrument();
guitar.playInstrument();
perc.playInstrument();
//console.log(ww);
//console.log(guitar);
//console.log(perc);