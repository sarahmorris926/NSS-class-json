
console.log("First line in JS file", Date.now());

// 1. create a new request object
let myRequest = new XMLHttpRequest();


// 2. Create callbacks
function executeThisIfXHRFails() {
  console.log("An error occured while transferring the data");
}

function executeThisAfterFileIsLoaded() {
  // console.log("myRequest", myRequest);
  console.log("event.target", event.target);
  // JSON parse will turn our JSON string into a JS object
  var data = JSON.parse(this.responseText); // can also use "event.target.responseText" instead of this
  console.log("data", data);
  outputSongs(data.songs);
}

// 3. setup event listeners for completed request and aborted request
myRequest.addEventListener("load", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

// CRUD
// Create Retrieve Update Destroy

// 4. Tell it which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
myRequest.open("GET", "songs.json");

// if you have API... 
myRequest.open(
  "GET",
  // "http://api.website.com/......" 
);


// 5. Go get it, boy!
myRequest.send();

// DOM manipulation stuff
function outputSongs(songsArr) {
  let songList = document.getElementById("song-list");
  songsArr.forEach(function(song) {
    console.log("song title", song.title);
    songList.innerHTML += `<h2>${song.title}</h2>`;
  });
}

console.log("Last Line in JS file", Date.now());


