// ======================== BACKGROUND STUFF ========================
// Define variables
const normal = document.getElementsByClassName("default_class");
const drip = document.getElementsByClassName("drip_class");
const lush = document.getElementsByClassName("lush_class");
const deep = document.getElementsByClassName("deep_class");

//These run when user hovers over a certain part of the screen. Changes the background of the site when ran (see friends' pages)
// Normal tier hovers
normal[0].addEventListener("click", () => { document.querySelector("body").id = "bg_default"; });

// Drip tier hovers
drip[0].addEventListener("click", () => { document.querySelector("body").id = "bg_drip"; });

// Lush tier hovers
lush[0].addEventListener("click", () => { document.querySelector("body").id = "bg_lush"; });

// Deep tier hovers
deep[0].addEventListener("click", () => { document.querySelector("body").id = "bg_deep"; });

// ======================== BIOME INFO DISPLAY ========================
//Define variables
var normal_cave = document.getElementById('normal_cave_display');
var drip_cave = document.getElementById('drip_cave_display');
var lush_cave = document.getElementById('lush_cave_display');
var deep_cave = document.getElementById('deep_cave_display');
//Function -- Runs when button is clicked, menu nav is shown
function toggle_normal() {
  normal_cave.classList.remove('hidden')
  drip_cave.classList.add('hidden')
  lush_cave.classList.add('hidden')
  deep_cave.classList.add('hidden')

}

function toggle_drip() {
  normal_cave.classList.add('hidden')
  drip_cave.classList.remove('hidden')
  lush_cave.classList.add('hidden')
  deep_cave.classList.add('hidden')
}

function toggle_lush() {
  normal_cave.classList.add('hidden')
  drip_cave.classList.add('hidden')
  lush_cave.classList.remove('hidden')
  deep_cave.classList.add('hidden')
}

function toggle_deep() {
  normal_cave.classList.add('hidden')
  drip_cave.classList.add('hidden')
  lush_cave.classList.add('hidden')
  deep_cave.classList.remove('hidden')
}

// ======================== RANDOM AUDIO PLAY ========================

const cave_noises = ["audio/cave_1.ogg", "audio/cave_3.ogg", "audio/cave_4.ogg", "audio/cave_7.ogg", "audio/cave_8.ogg", "audio/cave_10.ogg", "audio/cave_11.ogg", "audio/cave_13.ogg", "audio/cave_15.ogg", "audio/cave_16.ogg"];



function play_random_cave() {
  //Play the random cave found from an array
  const audio_index = Math.floor(Math.random() * cave_noises.length);
  const audio = new Audio(cave_noises[audio_index]);
  audio.play();
}

function random_cave_delay() {
  //Delay by a random amount of time
  let cave_rand_delay = 20000 //Random number in an interval of 10 sec

  for (let i = 0; i < 3; i++) {
    setTimeout(play_random_cave, cave_rand_delay); //wait random amount then run the function
    cave_rand_delay = (Math.floor((Math.random() * 9) + 3)) * 10000;
  }

}

