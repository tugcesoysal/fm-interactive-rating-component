document.addEventListener("DOMContentLoaded", function () {
  const circleDivs = document.querySelectorAll(".circle");
  const submitButton = document.getElementById("btn");

  let selectedRating = null;

  circleDivs.forEach((circle) => {
    circle.addEventListener("click", function () {
      if (!selectedRating) {
        selectedRating = this.textContent;
        this.classList.add("selectedRating");
      }
    });
  });

  // @ts-ignore
  submitButton.addEventListener("click", function () {
    if (selectedRating) {
      localStorage.setItem("selectedRating", selectedRating);
      window.location.href = `thank-you.html`;
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
