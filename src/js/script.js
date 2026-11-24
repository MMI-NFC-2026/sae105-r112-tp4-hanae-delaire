// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon?.addEventListener("click", (event) => {
  if (event.target.closest("summary")) {
    event.preventDefault();
    accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
  }
});
