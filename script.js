// Your JS goes here
// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
var body = document.getElementsByTagName("body")[0];

//body.appendChild(box);
body.style.background = "-webkit-linear-gradient(Blue,Red)";
body.style.opacity = "0.2";

for (var i = 0; i < 99; i++) {
  var box = document.createElement("div");
  body.appendChild(box);
  box.style.width = "11.1%";
  box.style.height = "11.1%";
  box.style.float = "left";
  //box.style.display = "inline"
  //box.style.justifyContent = "space-around";
  box.style.paddingBottom = "11.1%";

  //Checkboard
  // if(i % 2 == 0){
  //   box.style.backgroundColor = "#000";
  // }else {
  //   box.style.backgroundColor = "red";
  // }

  //Random Colors
  //box.style.backgroundColor = "#" + Math.floor(Math.random()*999999);
  //box.style.border = "4px solid black"

  //Gradient
  if(i % 2 == 0){
    box.style.backgroundColor = "black";
  }else {
    box.style.backgroundColor = "yellow";
  }

}
//body.appendChild(box);
