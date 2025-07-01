function callNumber() {
  // Simulate dialing or link to phone call for mobile devices
  window.location.href = "tel:9856589510";
}

document
  .getElementById("consultation-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your consultation request has been submitted!");
  });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card__btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.track;
      console.log(`Consultation CTA clicked for: ${category}`);

      alert(
        "A representative will contact you shortly for a free consultation."
      );
    });
  });
});

// Rotate plus icon on click
document.querySelectorAll(".plus").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// Enable click‑&‑drag scrolling for desktop users
(function () {
  const slider = document.getElementById("testimonialCards");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.8; // scroll‑speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  });
})();

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to your server
    alert("Form submitted!");
  });
