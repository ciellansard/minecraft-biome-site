//show texture of each person's page when their skin is hovered over
function changeSkin(playerSkin, blockSkin) {
  blockSkin = blockSkin.split('images/')[1];
  blockSkin = "images/" + blockSkin;
  playerSkin.src = blockSkin;
}

const cielSkin = document.getElementById("ciel_skin");
const ziyadSkin = document.getElementById("ziyad_skin");
const ninaSkin = document.getElementById("nina_skin");
const shahSkin = document.getElementById("shah_skin");
const chloeSkin = document.getElementById("chloe_skin");

cielSkin.addEventListener("mouseover", function() {
  changeSkin(this, "images/forest_skin.png");
});
ziyadSkin.addEventListener("mouseover", function() {
  changeSkin(this, "images/diamond_skin.png");
});
ninaSkin.addEventListener("mouseover", function() {
  changeSkin(this, "images/ocean_skin.png");
});
shahSkin.addEventListener("mouseover", function() {
  changeSkin(this, "images/nether_skin.png");
});
chloeSkin.addEventListener("mouseover", function() {
  changeSkin(this, "images/end_skin.png");
});

cielSkin.addEventListener("mouseout", function() {
  changeSkin(this, "images/ciel_skin.png");
});
ziyadSkin.addEventListener("mouseout", function() {
  changeSkin(this, "images/ziyad_skin.png");
});
ninaSkin.addEventListener("mouseout", function() {
  changeSkin(this, "images/nina_skin.png");
});
shahSkin.addEventListener("mouseout", function() {
  changeSkin(this, "images/shah_skin.png");
});
chloeSkin.addEventListener("mouseout", function() {
  changeSkin(this, "images/chloe_skin.png");
});