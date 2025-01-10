
interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details{
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed sheeran",
        year: 2015
    }
}

//const song = "New Song";
//const { song:anotherSong,songDuration:duration,audioVolumen:volume,} = audioPlayer;
//const {author,year} = audioPlayer.details;

//console.log('Song ',anotherSong);
//console.log('duration ',duration);
//console.log('volume ',volume);
//console.log('author ',author);
//console.log('year ',year);



const [,,trunks="Not found"]: string[] = ['Goku','Vegeta'];

console.log('Personaje 3: ', trunks);



export{}

