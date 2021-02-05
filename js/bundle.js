const hotspot = document.getElementById("hotspot");

const animations = ["first", "second"];
let currentAnimationIndex = undefined;

hotspot.addEventListener("mousedown", () => {
  // remove all classes
  hotspot.classList.remove(...hotspot.classList);
  // calculate next animation
  currentAnimationIndex = currentAnimationIndex === undefined ? 0 : (currentAnimationIndex + 1) % animations.length;
  // add animation class
  hotspot.classList.add(animations[currentAnimationIndex]);
});
