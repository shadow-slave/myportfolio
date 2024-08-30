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

// window.onscroll = function() {toggleSidebar()};

// function toggleSidebar() {
//     var desktopNav = document.getElementById("desktop-nav");
//     var sidebar = document.getElementById("sidebar");
//     if (window.innerWidth >= 1200 ){
//         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//             desktopNav.classList.add("hidden");
//             sidebar.classList.remove("hidden");
//             sidebar.classList.add("open");
//         } else {
//             desktopNav.classList.remove("hidden");
//             sidebar.classList.remove("open");
//         }
//     }
// 
// SIDEBAR 

window.addEventListener('scroll', debounce(toggleSidebar, 50));

function toggleSidebar() {
    var desktopNav = document.getElementById("desktop-nav");
    var sidebar = document.getElementById("sidebar");

    // Ensure elements exist
    if (!desktopNav || !sidebar) return;

    // Only run if screen width is 1200px or greater
    if (window.innerWidth >= 1200) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            desktopNav.classList.add("hidden");
            sidebar.classList.remove("hidden");
            sidebar.classList.add("open");
        } else {
            desktopNav.classList.remove("hidden");
            sidebar.classList.remove("open");
        }
    } 
}

// Debounce function to improve performance during scroll events
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initial check to set up the correct state
toggleSidebar();

// Handle window resize
window.addEventListener('resize', toggleSidebar);
