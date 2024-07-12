// document.addEventListener("DOMContentLoaded", function() {
//     const navItems = document.querySelectorAll(".nav_items");
//     const circle = document.querySelector(".circle");

//     function moveCircleToElement(element) {
//         const rect = element.getBoundingClientRect();
//         const navContainerRect = document.querySelector(".nav_container").getBoundingClientRect();
//         const topPosition = rect.top - navContainerRect.top + (rect.height / 2) - (circle.offsetHeight / 2);
//         circle.style.transform = `translateY(${topPosition - 8}px)`; 
//     }

//     // Initialize the circle position to the first item
//     moveCircleToElement(navItems[0]);

//     navItems.forEach(item => {
//         item.addEventListener("click", function() {
//             moveCircleToElement(item);

//             const href = item.querySelector('a').getAttribute('href');
//             if (href) {
//                 setTimeout(() => {
//                     window.location.href = href;
//                 }, 300);
//                 //here 300 is a delay for moving the circle down!
//             }
//     });
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const navItems = document.querySelectorAll(".nav_items");
//     const circle = document.querySelector(".circle");

//     function moveCircleToElement(element) {
//         const rect = element.getBoundingClientRect();
//         const navContainerRect = document.querySelector(".nav_container").getBoundingClientRect();
//         const topPosition = rect.top - navContainerRect.top + (rect.height / 2) - (circle.offsetHeight / 2);
//         circle.style.transform = `translateY(${topPosition - 8}px)`;
//     }

//     // Function to set active item and update localStorage
//     function setActiveItem(index) {
//         localStorage.setItem('activeNavItem', index);
//     }

//     // Initialize circle position based on localStorage or default to first item
//     const activeIndex = localStorage.getItem('activeNavItem');
//     if (activeIndex !== null && navItems[activeIndex]) {
//         moveCircleToElement(navItems[activeIndex]);
//     } else {
//         moveCircleToElement(navItems[0]);
//     }

//     // Event listeners for navigation items
//     navItems.forEach((item, index) => {
//         item.addEventListener("click", function(event) {
//             moveCircleToElement(item);
//             setActiveItem(index);

//             const href = item.querySelector('a').getAttribute('href');
//             if (href) {
//                 event.preventDefault(); // Prevent default navigation
//                 setTimeout(() => {
//                     window.location.href = href;
//                 }, 300); // Delay for moving the circle animation
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function() {

    const currentReading = document.querySelector('.current_reading');
    currentReading.addEventListener('click',function(){
     const bookId=currentReading.getAttribute('data-book-id');
     localStorage.setItem('storedBookId',bookId);
     window.location.href='bookIndex.html';
    });
    const navContainer = document.querySelector('.nav_container');
    const navItems = document.querySelectorAll(".nav_items");
    let circle = document.querySelector('.circle');

    // Create circle if not already present
    if (!circle) {
        circle = document.createElement('div');
        circle.classList.add('circle');
        navContainer.appendChild(circle); // Append circle to nav container
    }

    // Function to move circle to an element
    function moveCircleToElement(element) {
        const rect = element.getBoundingClientRect();
        const circleHeight = circle.offsetHeight;

        // Calculate the position relative to the nav container
        const elementTopInView = rect.top - navContainer.getBoundingClientRect().top + (rect.height / 2) - (circleHeight / 2) - 6; // Move circle 6px up

        // Set the circle's top position
        circle.style.transform = `translateY(${elementTopInView}px)`;

        // Set circle opacity to fully visible
        circle.style.opacity = '1';
    }

    // Function to initialize circle position on page load
    function initializeCircle() {
        // Retrieve active nav item index from localStorage
        const activeIndex = localStorage.getItem('activeNavItem');

        // Move circle to the active nav item position
        if (activeIndex !== null && navItems[activeIndex]) {
            moveCircleToElement(navItems[activeIndex]);
        } else {
            moveCircleToElement(navItems[0]); // Default to first item if no active index
        }
    }

    // Initialize circle position on page load
    initializeCircle();

    // Event listeners for navigation items
    navItems.forEach((item, index) => {
        item.addEventListener("click", function(event) {
            moveCircleToElement(item);
            localStorage.setItem('activeNavItem', index); // Store active item index

            const href = item.querySelector('a').getAttribute('href');
            if (href) {
                event.preventDefault(); // Prevent default navigation

                setTimeout(() => {
                    window.location.href = href;
                }, 0); // Delay for moving the circle animation
            }
        });
    });

    // Update circle position on window resize
    window.addEventListener('resize', initializeCircle);
});






























