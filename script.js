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

window.onscroll = function() {toggleSidebar()};

function toggleSidebar() {
    var desktopNav = document.getElementById("desktop-nav");
    var sidebar = document.getElementById("sidebar");
    if (window.innerWidth >= 1200 ){
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


