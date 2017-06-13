// Your JS goes here
// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
var body = document.getElementsByTagName("body")[0];

//body.appendChild(box);

for (var i = 0; i < 99; i++) {
  var box = document.createElement("div");
  body.appendChild(box);
  box.style.width = "11.1%";
  box.style.height = "11.1%";
  box.style.float = "left";
  //box.style.display = "inline"
  //box.style.justifyContent = "space-around";
  box.style.paddingBottom = "11.1%";



  //Random Colors
  box.style.backgroundColor = "#" + Math.floor(Math.random()*999999);
  box.style.border = "4px solid black"


}
//body.appendChild(box);
