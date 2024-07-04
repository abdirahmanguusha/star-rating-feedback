const stars = document.querySelectorAll(".stars i");
const submitButton = document.getElementById("submit");
const commentBox = document.getElementById("comment");
const thankYouMessage = document.getElementById("thankYouMessage");
const container = document.querySelector(".container");

let rating = 0;

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    rating = index1 + 1;
    stars.forEach((star, index2) => {
      if (index2 <= index1) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  });
});

submitButton.addEventListener("click", (event) => {
  const comment = commentBox.value.trim();

  if (rating === 0 || comment === "") {
    alert("Please select a rating and enter a comment before submitting.");
    event.preventDefault();
    return;
  }

  container.style.display = "none";
  thankYouMessage.style.display = "block";
});
