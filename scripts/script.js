
//delay for chest animation
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//chest mobile nav 
var chest = document.getElementById("chest");
var gui = document.getElementById("chest_gui");
var source = chest.src;
chest.addEventListener("click", function() {
  chestOpenClose()
});

async function chestOpenClose() {

  source = chest.src;
  source = source.split('images/')[1];
  if (source == "chest_closed.png" || source == "chest_close_gif.gif") {
    chest.src = "images/chest_open_gif.gif";
    await sleep(700);
    gui.style.display = "block";

  }
  else {
    chest.src = "images/chest_close_gif.gif";
    await sleep(1200);
    gui.style.display = "none";

  }
}

