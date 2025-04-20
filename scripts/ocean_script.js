//image carousel
var leftArrow = document.getElementById("left_arrow")
var rightArrow = document.getElementById("right_arrow")
var leftImage = document.getElementById("left_image");
var rightImage = document.getElementById("right_image");
var bigImage = document.getElementById("big_image");
const images = document.getElementsByClassName("carousel_img");
const text = document.getElementsByClassName("ocean_mobs");
text[1].style.display = "block";
const sources = ["images/guardian.gif", "images/tropical_fish.gif", "images/dolphin.gif", "images/squid.gif", "images/elder_guardian.gif", "images/drowned.gif", "images/glow_squid.gif"];
leftArrow.addEventListener("click", function() {
  carousel(leftImage.src);
});
rightArrow.addEventListener("click", function() {
  carousel(rightImage.src);
});

function carousel(givenSource) {
  //take only the required part of the image source
  givenSource = givenSource.split('images/')[1];
  givenSource = "images/" + givenSource;
  var index = 0;
  //find index of image
  for (var i = 0; i < sources.length; i++) {
    text[i].style.display = "none";
    if (sources[i] == givenSource) {
      index = i;
    }
  }
  //assign source to middle image
  bigImage.src = sources[index];
  text[index].style.display = "block";
  //case where image is the last in the array
  if (index == (sources.length - 1)) {
    //set right image to first image
    rightImage.src = sources[0];
    leftImage.src = sources[index - 1];
  }
  //case where image is the first in the array
  else if (index == 0) {
    rightImage.src = sources[index + 1];
    //set left image to last image
    leftImage.src = sources[(sources.length - 1)];
  }
  //set left and right image to be +-1 of current image
  else {
    rightImage.src = sources[index + 1];
    leftImage.src = sources[index - 1];
  }

}

//background changer (different method)

const backgrounds = ["/images/ocean.png", "/images/ocean_deep.webp", "/images/ocean_lukewarm.webp", "/images/panorama_ocean.webp", "/images/ocean_cold.webp", "/images/ocean_frozen.webp"];
const biomeButtons = document.getElementsByClassName("biome_list");
const biomeText = document.getElementsByClassName("biome_text");
biomeText[0].style.display = "block";

function backgroundChange(source) {
  document.body.style.transition = "0.5s";
  document.body.style.backgroundImage = "url(" + source + ")";
}

biomeButtons[0].addEventListener("click", function() {
  backgroundChange(backgrounds[0]);
  changeText(0);
});
biomeButtons[1].addEventListener("click", function() {
  backgroundChange(backgrounds[1]);
  changeText(1);
});
biomeButtons[2].addEventListener("click", function() {
  backgroundChange(backgrounds[2]);
  changeText(2);
});
biomeButtons[3].addEventListener("click", function() {
  backgroundChange(backgrounds[3]);
  changeText(3);
});
biomeButtons[4].addEventListener("click", function() {
  backgroundChange(backgrounds[4]);
  changeText(4);
});
biomeButtons[5].addEventListener("click", function() {
  backgroundChange(backgrounds[5]);
  changeText(5);
});

//display correct text description for each biome
function changeText(index) {
  for (var i = 0; i < biomeText.length; i++) {
    biomeText[i].style.display = "none";
  }
  biomeText[index].style.display = "block";
}