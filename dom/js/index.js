'use strict';

let puppyIsSmall = true; //puppy state

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "HUNTR/X", title: "Golden", youtubeUrl: "https://www.youtube.com/watch?v=yebNIHKAC4A"
  },
  {
    artist: "Justin Bieber",
    title: "Baby"
  },
];

console.log(songArray);

//pattern
// const newArray = oldArray.map(function(elem) {
//   const transformed = //elem make it different
//   return transformed;
// })

// const titleArray = songArray.map(function(songObj) {
//   const transformed = "<li>" + songObj.artist + " - " + songObj.title + "</li>";
//   return transformed;
// })
// console.log(titleArray);

/** DOM **/

const h1Elem = document.querySelector("h1");
console.log(h1Elem);

h1Elem.textContent = "DOM HAS CHANGED!";


const headerElem = document.querySelector('header');
headerElem.classList.add('bg-warning');
headerElem.classList.add('fancy');

const puppyButton = document.querySelector('#puppySection button');

puppyButton.addEventListener("click", 
  function(event) {



    if(puppyIsSmall) {
      //grow up the puppy
      const dogImg = document.querySelector('#puppySection img');
      dogImg.src = "img/husky.jpg";
      dogImg.alt = "a grown puppy";

      puppyIsSmall = false;
    } else {
      //puppy becomes small
      const dogImg = document.querySelector('#puppySection img');
      dogImg.src = "img/puppy.jpg";
      dogImg.alt = "a smol puppy";

      puppyIsSmall = true;
    }

  })



function createSongItem(songObj) {
  //want: <li><a>content</a></li>

  const newLi = document.createElement("li");

  const newA = document.createElement('a');
  newA.textContent = songObj.artist + " - " + songObj.title;
  newA.href = songObj.youtubeUrl;

  newLi.appendChild(newA);

  return newLi
}


//render songArray
function renderSongArray() {
  const songListElem = document.querySelector('#songSection ol');
  songListElem.innerHTML = "";

  for(const aSongObj of songArray) {
    const newSongLi = createSongItem(aSongObj);
    songListElem.appendChild(newSongLi);
  }  
}
renderSongArray();


//INTERACTION
const form = document.querySelector('#formSection form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("form submitted");

  //MODIFY STATE
  const artistInput = document.querySelector('#artistInput');
  const artist = artistInput.value;
  const titleInput = document.querySelector('#titleInput');
  const title = titleInput.value;

  const newSongObj = {
    artist: artist, title: title
  }
  songArray.push(newSongObj);

  //RERENDER CONTENT
  renderSongArray();

});
