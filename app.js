document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".stars i");
    const submitButton = document.getElementById("submit");
    const commentBox = document.getElementById("comment");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const feedbackContainer = document.getElementById("feedbackContainer");

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

    submitButton.addEventListener("click", () => {
        const comment = commentBox.value.trim(); // Trim whitespace from comment
        console.log("Rating:", rating);
        console.log("Comment:", comment);

        // Hide the feedback form and display the thank you message
        feedbackContainer.style.display = "none";
        thankYouMessage.style.display = "block";
    });
});
