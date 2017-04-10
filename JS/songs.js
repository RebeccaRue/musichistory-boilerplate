"use strict";

function loadMusicLibrary(e) {
  var songLibData = JSON.parse(e.target.responseText)
  console.log("songLibData", songLibData.songLib)

  popDomFromJSON(songLibData.songLib)
}

var myRequest = new XMLHttpRequest()
myRequest.open("GET", "tunesLib1.json")
myRequest.send()

myRequest.addEventListener("load", loadTunesLib)

function popDomFromJSON(e) {
  var songDataString = '';
  for (var i = 0; i < e.length; i++) {
    songDataString += `<div>`;
      songDataString += `<h3><b>${e[i].Title}</b></h3>`;
      songDataString += `<ul>`;
        songDataString += `<li>${e[i].Artist}</li>`;
        songDataString += `<li>${e[i].Album}</li>`;
        songDataString += `<li>${e[i].Genre}</li>`;
      songDataString += `</ul>`;
    songDataString += `</div>`;
  }
  $("#listFreshBeats").html(songDataString);
}