document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav_items");
    const circle = document.querySelector(".circle");
    const mainContent = document.getElementById("main-content");

    function moveCircleToElement(element) {
        const rect = element.getBoundingClientRect();
        const navContainerRect = document.querySelector(".nav_container").getBoundingClientRect();
        const topPosition = rect.top - navContainerRect.top + (rect.height / 2) - (circle.offsetHeight / 2);
        circle.style.transform = `translateY(${topPosition - 8}px)`; 
    }

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
                executeScripts(mainContent);
            })
            .catch(error => console.error('Error loading content:', error));
    }

    function executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.innerHTML = script.innerHTML;
            }
            document.body.appendChild(newScript);
        });
    }

    // Initialize the circle position to the first item and load home content
    moveCircleToElement(navItems[0]);
    loadContent(navItems[0].dataset.target);

    navItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior to handle it manually
            moveCircleToElement(item);

            // Load the corresponding content
            const target = item.getAttribute('data-target');
            if (target) {
                loadContent(target);
            }
        });
    });
});
