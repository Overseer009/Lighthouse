const library = {
  tracks: {
              t01: { 
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" 
              },
              t02: { 
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: { 
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
          },
  playlists: { 
              p01: { 
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
                     },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


const printPlaylists = function() {
       const allPlaylists = library.playlists;
       for (let playlists in allPlaylists) {
              // console.log('Playlists:', playlists);
              console.log(`${playlists}: ${allPlaylists[playlists].name} - ${allPlaylists[playlists].tracks.length} tracks`);      
       }
};
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


const printTracks = function() {
       const allTracks = library.tracks;
       for (let tracks in allTracks) {
              console.log(`${tracks}: ${allTracks[tracks].name} by ${allTracks[tracks].artist} (${allTracks[tracks].album})`);
       }
};
printTracks();



// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


const printPlaylist = function(playlistId) {
       let trackList = library.tracks;
       let catalog = library.playlists;
       if (catalog[playlistId]) {
              console.log(`${catalog[playlistId].id}: ${catalog[playlistId].name} - ${catalog[playlistId].tracks.length} tracks`);
              let arrayOfTracks = catalog[playlistId].tracks;
              for (let items of arrayOfTracks) {
                   console.log(`${trackList[items].id}: ${trackList[items].name} by ${trackList[items].artist} (${trackList[items].album})`);  
              }
              //  
       } else {
              console.log("This is not a playlist!");
       }
}
printPlaylist('p04')


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       let catalog = library.playlists;
       catalog[playlistId].tracks.push(trackId);
       //console.log(`${catalog[playlistId].tracks}`);
};
addTrackToPlaylist('t01', 'p02')

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       const newId = generateUid();
       let newSong = {
              id: newId,
              name: name,
              artist: artist,
              album: album
       };
       library.tracks[newId] = newSong;
       // console.log(library.tracks);
}
addTrack("The Hand That Feeds", "Nine Inch Nails", "Pretty hate machine")


// adds a playlist to the library
const addPlaylist = function(name) {
       const newId = generateUid();
       let newPlaylist = {
              id: newId,
              name: name,
              tracks: []
       };
       library.playlists[newId] = newPlaylist
       // console.log(library.playlists);
}
addPlaylist("Industrial Playlist")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}