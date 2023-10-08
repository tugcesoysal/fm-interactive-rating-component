document.addEventListener("DOMContentLoaded", function () {
  const ratingDisplay = document.querySelector(".selected");
  const selectedRating = localStorage.getItem("selectedRating");

  ratingDisplay.textContent = selectedRating;
});
