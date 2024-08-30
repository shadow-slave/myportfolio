window.onload = function(){
    document.getElementById("preloader").style.display= "none";
    document.getElementById("main-content").classList.remove('main-content-hidden');

}
;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// SIDEBAR 

window.addEventListener('scroll', toggleSidebar);
window.addEventListener('resize', toggleSidebar);

// Toggle Sidebar based on scroll position
function toggleSidebar() {
    const desktopNav = document.getElementById("desktop-nav");
    const sidebar = document.getElementById("sidebar");

    // Ensure elements exist
    if (!desktopNav || !sidebar) return;

    // Only run if screen width is 1200px or greater
    if (window.innerWidth >= 1200) {
        const scrolledPastThreshold = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
        
        if (scrolledPastThreshold) {
            desktopNav.classList.add("hidden");
            sidebar.classList.remove("hidden");
            sidebar.classList.add("open");
        } else {
            desktopNav.classList.remove("hidden");
            sidebar.classList.remove("open");
            sidebar.classList.add("hidden");
        }
    } else {
        sidebar.classList.remove("open");
        sidebar.classList.add("hidden");
    }
}

// Initial check to set up the correct state
toggleSidebar();
