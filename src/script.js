
// Assuming your hamburger has an id of 'hamburger' and your mobile nav has an id of 'mobile-nav'
document.getElementById('hamburger').onclick = function() {
    var mobileNav = document.getElementById('mobile-nav');
    var navTriangle = document.getElementById('nav-triangle');
    mobileNav.classList.toggle('hidden');
    navTriangle.classList.toggle('hidden');
  };
  