"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".custom-price-button");
    const contents = document.querySelectorAll(".custom-price-content");

    // Debugging log to check if elements are found
    console.log("Found buttons:", buttons.length);
    console.log("Found contents:", contents.length);

    // function trigger click on desktop
    // var actionClass = document.getElementById("action-class");
    // if (window.innerWidth > 991) {
    //   actionClass.click();
    // }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            console.log("Button clicked:", targetId);

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
                setTimeout(() => {
                    targetContent.classList.add("show");
                }, 10);
            } else {
                console.error("Target content not found:", targetId);
            }
        });
    });
});
