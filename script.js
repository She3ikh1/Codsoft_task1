

$(document).ready(function() {
    $('#mennu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        if ($(window).scrollTop() > 0) {
            $('.top').fadeIn(); // Show the button when scrolling down
        } else {
            $('.top').fadeOut(); // Hide the button when at the top
        }
    });

    // Smooth scrolling when clicking on the scroll-to-top button
    $('a.top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 500, 'linear');
    });

    // Trigger scroll event on page load to check if the button should be visible or not
    $(window).trigger('scroll');
});

// // Function to handle smooth scrolling to the target section
// function smoothScroll(target) {
//     const targetSection = document.querySelector(target);
//     const headerHeight = document.querySelector("header").offsetHeight;
//     const targetOffset = targetSection.offsetTop - headerHeight;
  
//     window.scroll({
//       top: targetOffset,
//       behavior: "smooth",
//     });
//   }
  
//   // Get all navigation links and add click event listeners
//   const navLinks = document.querySelectorAll(".navbar a");
  
//   navLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault(); // Prevent default link behavior
//       const targetSectionId = link.getAttribute("href"); // Get the target section ID from the link's href attribute
//       smoothScroll(targetSectionId); // Call the smoothScroll function with the target ID
//     });
//   });
  