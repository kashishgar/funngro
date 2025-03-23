document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login Successful!");
    });

    // Smooth scroll animation
        document.querySelectorAll("a[href^='#']").forEach(anchor => {
            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        });   

});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Hero Animation
    const heroText = document.querySelector(".hero h2");
    const heroBtn = document.querySelector(".hero .btn");
    heroText.style.opacity = "0";
    heroBtn.style.opacity = "0";
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
        heroBtn.style.opacity = "1";
    }, 500);

    // Sticky Header
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#111";
        } else {
            header.style.background = "#1e1e1e";
        }
    });

    // Login Form Validation
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
    
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
    
        // Regular expression for a valid email format
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (username === "" || password === "") {
            alert("Please fill in all fields!");
        }else if (!emailRegex.test(username)===false) {
            alert("Please enter a valid email address!");
        } else {
            alert("Login Successful! (Demo)");
        }
    });
    

    
    
    

document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        circle.addEventListener("mouseover", () => {
            circle.style.transform = "scale(1.2)";
        });

        circle.addEventListener("mouseleave", () => {
            circle.style.transform = "scale(1)";
       });
   });
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); // Get target value
        let count = +counter.innerText; // Get current counter value
        const increment = target / 100; // Adjust speed of counting

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 50); // Continue updating every 50ms
        } else {
            counter.innerText = target; // Ensure it stops at the target value
        }
    };

    updateCounter(); // Start the counter animation for each counter separately
});
});

// document.addEventListener("DOMContentLoaded", function () {
// let currentIndex = 0; // Track the current review index
// const reviewsContainer = document.querySelector('.testimonial-container');
// const totalReviews = document.querySelectorAll('.testimonial-slide').length;

// if (!reviewsContainer || totalReviews.length === 0) {
//     console.error("Error: Testimonial container or slides not found!");
//     return;
// }

// function moveSlide() {
//     // Move to the next slide, loop back to first if it's the last slide
//     if (currentIndex < totalReviews - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0; // Loop back to the first review
//     }

//     // Calculate the new position to slide to
//     const offset = -currentIndex * 100; // 100% because each card takes up the full container width
//     reviewsContainer.style.transition = "transform 1s ease"; // Slide smoothly
//     reviewsContainer.style.transform = `translateX(${offset}%)`;
// }

// function holdSlide() {
//     // When the slide is held for 30 seconds, remove the transition for smoothness
//     reviewsContainer.style.transition = "none";
// }

// // Set interval to move every 5 seconds
// setInterval(() => {
//     holdSlide(); // Hold the current slide for 30 seconds before moving
//     moveSlide();
// }, 5000); // Move every 5 seconds

// // Function to handle the 30-second hold
// setInterval(() => {
//     holdSlide(testimonial-slide); // Hold the current slide for 30 seconds
// }, 30000); // Hold for 30 seconds
// })


document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const container = document.querySelector('.testimonial-container');
    const slides = document.querySelectorAll('.testimonial-slide');

    if (!container || slides.length === 0) {
        console.error("Error: Testimonial container or slides not found!");
        return;
    }

    function slideTestimonials() {
        // Increment the index to move to the next slide
        index++;

        // If we've reached the last slide, loop back to the first slide
        if (index >= slides.length) {
            index = 0;
        }

        // Calculate the offset to move the container to the next testimonial
        const offset = -index * 100; // Each slide is 100% of the container's width
        container.style.transform = `translateX(${offset}%)`;

        // Set a 5-second interval between each slide
        setTimeout(slideTestimonials, 5000);  // Move after every 5 seconds
    }

    // Initial delay before starting the sliding (5 seconds before the first slide starts)
    setTimeout(slideTestimonials, 2000);  // Start sliding after 5 seconds of delay

    // Ensure smooth transition for sliding
    container.style.transition = "transform 5s ease-in-out";
});
