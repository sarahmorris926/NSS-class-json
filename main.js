

// create a new request object
let myRequest = new XMLHttpRequest();


function executeThisIfXHRFails () {
  console.log("An error has occurred while transferring this data");
}

function executeThisAfterFileIsLoaded() {
  console.log("event.target", event.target);
  var data = JSON.parse(event.target.responseText);
  console.og("data", data);
  outputSongs(data.songs);
}


// Setup event listeners for completed request and aborted request
myRequest.addEventListener("error", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);


// CRUD
// Create Retrieve Update Destroy


// Tell it which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
myRequest.open(“GET”, “songs.json”);
// Go get it boy!
myRequest.send();


//DOM manipulation stuff
function outputSong(songsArr) {
  let songList = document.getElementById("song-list");
  songsArr.forEach(function(song) {
    console.log("song title", song.title);
    songList.innerHTML += `<h2>${song.title}</h2>`;
  });
}

console.log("Last line in JS file", Date.now());