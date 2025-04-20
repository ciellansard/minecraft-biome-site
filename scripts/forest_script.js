const text = document.getElementsByClassName("structures");
text[0].style.display = "block";
text[1].style.display = "none";
text[2].style.display = "none";
const big = document.getElementById("big_image").src;
const right = document.getElementById("right_image").src;
const left = document.getElementById("left_image").src;

//New carousel functions (the other one did not work with my content..!)
function carouselRight() {
  //Shift all the images over to the right
  document.getElementById("right_image").src = document.getElementById("big_image").src
  document.getElementById("big_image").src = document.getElementById("left_image").src;
  //This method (checking if a specific text box is showing, then manually hiding every other one) is inefficient and unsustainable but it was the only way to make it work. sigh
  if (text[0].style.display === "block") {
    text[0].style.display = "none";
    text[1].style.display = "block";
    text[2].style.display = "none";
    document.getElementById("left_image").src = "images/struct_jungle.png";
  }
  else if (text[1].style.display === "block") {
    text[0].style.display = "none";
    text[1].style.display = "none";
    text[2].style.display = "block";
    document.getElementById("left_image").src = "images/struct_trail.png";
  }
  else {
    text[0].style.display = "block";
    text[1].style.display = "none";
    text[2].style.display = "none";
    document.getElementById("left_image").src = "images/struct_woodland.png";
  }
}

function carouselLeft() {
  document.getElementById("left_image").src = document.getElementById("big_image").src;
  document.getElementById("big_image").src = document.getElementById("right_image").src;

  if (text[0].style.display === "block") {
    text[0].style.display = "none";
    text[1].style.display = "none";
    text[2].style.display = "block";

    document.getElementById("right_image").src = "images/struct_woodland.png";
  }
  else if (text[2].style.display === "block") {
    text[0].style.display = "none";
    text[1].style.display = "block";
    text[2].style.display = "none";
    document.getElementById("right_image").src = "images/struct_trail.png";
  }
  else {
    text[0].style.display = "block";
    text[1].style.display = "none";
    text[2].style.display = "none";
    document.getElementById("right_image").src = "images/struct_jungle.png";
  }
}

//Backgrounds
const forest = document.getElementsByClassName("forest_class");
const birch = document.getElementsByClassName("birch_class");
const dark = document.getElementsByClassName("dark_class");
const jungle = document.getElementsByClassName("jungle_class");
const taiga = document.getElementsByClassName("taiga_class");
const flower = document.getElementsByClassName("flower_class");
const wooded = document.getElementsByClassName("wooded_class");
const cherry = document.getElementsByClassName("cherry_class");
const stone = document.getElementsByClassName("stone_box");

forest[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_forest";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_planks_oak.png)";
  }
});

birch[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_birch";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_stripped_birch.png)";
  }
});

dark[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_dark";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_planks_dark.png)";
  }
});

jungle[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_jungle";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_planks_jungle.png)";
  }
});

taiga[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_taiga";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_planks_spruce.png)";
  }
});

flower[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_flower";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_stripped_oak.png)";
  }
});

wooded[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_wooded";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_terracotta.png)";
  }
});

cherry[0].addEventListener("click", () => {
  document.querySelector("body").id = "bg_cherry";
  for (let i = 0; i < stone.length; i++) {
    stone[i].style.backgroundImage = "url(/images/block_stripped_cherry.png)";
  }
});