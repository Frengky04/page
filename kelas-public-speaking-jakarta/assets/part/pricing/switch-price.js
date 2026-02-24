document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".custom-price-button");
  const contents = document.querySelectorAll(".custom-price-content");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");

      // Remove active class from all buttons and contents
      buttons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => {
        content.classList.remove("active");
        content.classList.remove("show");
      });

      // Add active class to clicked button
      this.classList.add("active");

      // Add active class to target content
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.classList.add("show");
      }
    });
  });
});
