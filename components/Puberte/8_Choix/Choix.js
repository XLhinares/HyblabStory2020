const { x, y } = document.getElementById("panier").getBoundingClientRect();

document.querySelectorAll(".un-choix").forEach(el => {
  // hide text
  el.addEventListener("dragstart", () => {
    document
      .querySelectorAll(".un-choix")
      .forEach(el => el.classList.remove("showText"));
  });
  // show text
  el.addEventListener("dragend", e => {
    console.log(e.x);
    if (el.id !== "couche" && e.x > x && e.y > y) {
      el.classList.toggle("showText");
    }
  });
});
