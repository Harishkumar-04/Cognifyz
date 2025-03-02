AOS.init({ offset: 0 }); 

// Menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation a"); 

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Sticky header
window.addEventListener("scroll", () => { 
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Close menu on nav item click
navItems.forEach(item => { 
    item.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});