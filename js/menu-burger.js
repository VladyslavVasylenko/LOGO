"use strict";

const burger = document.querySelector('.navbar-burger');
const navbarList = document.querySelector('.navbar__list');

const toggleMenu = function() {
  navbarList.classList.toggle('open');
}

burger.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_navbarList = target == navbarList || navbarList.contains(target);
  const its_burger = target == burger;
  const navbarList_is_active = navbarList.classList.contains('open');
  
  if (!its_navbarList && !its_burger && navbarList_is_active) {
    toggleMenu();
  }
});

// Active
let li = navbarList.getElementsByClassName("navbar__link");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}