const MobileMenu = function () {
  this.menuIcon = document.getElementById('header__menu-icon');

  // Wire up event to show/hide menu content on mobile.
  this.menuIcon.onmouseup = function () {
    const menuContent = document.getElementById('header__menu-content');
    const visibleClass = 'header__menu-content--visible';

    if (menuContent.classList.contains(visibleClass)) { menuContent.classList.remove(visibleClass) }
    else { menuContent.classList.add(visibleClass) }
  };
};

module.exports = MobileMenu;
