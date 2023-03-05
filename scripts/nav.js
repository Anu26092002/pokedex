//Display the responsiveness of the nav bar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('.logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlight = (name) => {

  switch(name) {
    case "kanto":
      document.querySelector('#kanto-page').classList.add('highlight');
      document.querySelector('#johto-page').classList.remove('highlight');
      document.querySelector('#hoenn-page').classList.remove('highlight');
      document.querySelector('#sinnoh-page').classList.remove('highlight');
      document.querySelector('#unova-page').classList.remove('highlight');
      document.querySelector('#kalos-page').classList.remove('highlight');
      document.querySelector('#alola-page').classList.remove('highlight');
      document.querySelector('#galar-page').classList.remove('highlight');
      alert("Hi00")
      break;
    case "johto":
      document.querySelector('#kanto-page').classList.remove('highlight');
      document.querySelector('#johto-page').classList.add('highlight');
      document.querySelector('#hoenn-page').classList.remove('highlight');
      document.querySelector('#sinnoh-page').classList.remove('highlight');
      document.querySelector('#unova-page').classList.remove('highlight');
      document.querySelector('#kalos-page').classList.remove('highlight');
      document.querySelector('#alola-page').classList.remove('highlight');
      document.querySelector('#galar-page').classList.remove('highlight');
      break;
    case "hoenn":
      document.querySelector('#kanto-page').classList.remove('highlight');
      document.querySelector('#johto-page').classList.remove('highlight');
      document.querySelector('#hoenn-page').classList.add('highlight');
      document.querySelector('#sinnoh-page').classList.remove('highlight');
      document.querySelector('#unova-page').classList.remove('highlight');
      document.querySelector('#kalos-page').classList.remove('highlight');
      document.querySelector('#alola-page').classList.remove('highlight');
      document.querySelector('#galar-page').classList.remove('highlight');
      break;
    case "sinnoh":
      document.querySelector('#kanto-page').classList.remove('highlight');
      document.querySelector('#johto-page').classList.remove('highlight');
      document.querySelector('#hoenn-page').classList.remove('highlight');
      document.querySelector('#sinnoh-page').classList.add('highlight');
      document.querySelector('#unova-page').classList.remove('highlight');
      document.querySelector('#kalos-page').classList.remove('highlight');
      document.querySelector('#alola-page').classList.remove('highlight');
      document.querySelector('#galar-page').classList.remove('highlight');
      break;
    case "unova":
      document.querySelector('#kanto-page').classList.remove('highlight');
      document.querySelector('#johto-page').classList.remove('highlight');
      document.querySelector('#hoenn-page').classList.remove('highlight');
      document.querySelector('#sinnoh-page').classList.remove('highlight');
      document.querySelector('#unova-page').classList.add('highlight');
      document.querySelector('#kalos-page').classList.remove('highlight');
      document.querySelector('#alola-page').classList.remove('highlight');
      document.querySelector('#galar-page').classList.remove('highlight');
      break;
    case "kalos":
      document.querySelector('#kanto-page').classList.remove('highlight');
      document.querySelector('#johto-page').classList.remove('highlight');
      document.querySelector('#hoenn-page').classList.remove('highlight');
      document.querySelector('#sinnoh-page').classList.remove('highlight');
      document.querySelector('#unova-page').classList.remove('highlight');
      document.querySelector('#kalos-page').classList.add('highlight');
      document.querySelector('#alola-page').classList.remove('highlight');
      document.querySelector('#galar-page').classList.remove('highlight');
      break;     
    case "alola":
      document.querySelector('#kanto-page').classList.add('highlight');
      document.querySelector('#johto-page').classList.remove('highlight');
      document.querySelector('#hoenn-page').classList.remove('highlight');
      document.querySelector('#sinnoh-page').classList.remove('highlight');
      document.querySelector('#unova-page').classList.remove('highlight');
      document.querySelector('#kalos-page').classList.remove('highlight');
      document.querySelector('#alola-page').classList.add('highlight');
      document.querySelector('#galar-page').classList.remove('highlight');
      break;
    case "galar":
      document.querySelector('#kanto-page').classList.add('highlight');
      document.querySelector('#johto-page').classList.remove('highlight');
      document.querySelector('#hoenn-page').classList.remove('highlight');
      document.querySelector('#sinnoh-page').classList.remove('highlight');
      document.querySelector('#unova-page').classList.remove('highlight');
      document.querySelector('#kalos-page').classList.remove('highlight');
      document.querySelector('#alola-page').classList.remove('highlight');
      document.querySelector('#galar-page').classList.add('highlight');
      break;
  }
}

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
