/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
// Get all section elements
const sections = document.querySelectorAll("section");
// Get all h2 elements
const hText = document.querySelectorAll("h2");
// Get the ul element where li items will be added
const ul = document.getElementById("navbar__list");

/**
 * End Global Variables
 *
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport
window.onscroll = function () {
    const topScroll = window.scrollY;
    const navLinks = document.querySelectorAll(".navbar__menu li");
    sections.forEach((section, index) => {

        const topSection = section.offsetTop;
        const heightSection = section.offsetHeight;
        const idSection = section.getAttribute("id");

        if (topScroll >= topSection - 200 && topScroll < heightSection + topSection - 200) {
            section.classList.add("your-active-class");
            navLinks[index].classList.add("nav__list");

        } else {
            section.classList.remove("your-active-class");
            navLinks[index].classList.remove("nav__list");

        }

    });
};

// Scroll to anchor ID using scrollTO event
document.addEventListener("DOMContentLoaded", function () {
    // Loop through each section
    // Build menu
    sections.forEach((section, index) => {
        // Create a new li element
        const li = document.createElement("li");
        li.classList.add(".navbar__menu");
        // Set the text content of the li
        li.textContent = hText[index].textContent;
        // Append the li to the ul
        ul.appendChild(li);
        // Add an event listener to scroll to the section when li is clicked
        li.addEventListener("click", function () {
            section.scrollIntoView({ behavior: "smooth" });
        });


    });
});

/**
 * End Main Functions
 * Begin Events
 *
 */



