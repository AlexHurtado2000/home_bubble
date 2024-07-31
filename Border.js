const root = document.documentElement;

function setRadius(left_input, right_input, bottom_input, top_input) {
  radius = `${left_input}% ${right_input}% ${bottom_input}% ${top_input}%`;
  root.style.setProperty("--radius", radius);
  document.getElementById("code").innerHTML = `${t}% ${r}% ${b}% ${l}%`; 

}

var top_slider = document.getElementById("top-slider");
var bottom_slider = document.getElementById("bottom-slider");
var left_slider = document.getElementById("left-slider");
var right_slider = document.getElementById("right-slider");

let t = 0,
  r = 0,
  l = 0,
  b = 0

top_slider.addEventListener("input", (e) => {
  t = e.target.value;
  setRadius(t ,r, b, l);
});

bottom_slider.addEventListener("input", (e) => {
  b = e.target.value;
  setRadius(t ,r, b, l);
});

left_slider.addEventListener("input", (e) => {
  l = e.target.value;
  setRadius(t ,r, b, l);
});

right_slider.addEventListener("input", (e) => {
  r = e.target.value;
  setRadius(t ,r, b, l);
});

function clipboard_copy() {
  e.preventDefault()
  var copytext = document.getElementById("code");
  copytext.select();
  copytext.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copytext.value);
}
