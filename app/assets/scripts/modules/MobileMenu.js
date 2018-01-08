const utils = require('./utils');

const MobileMenu = function () {
  this.menuIcon = document.getElementById('header__menu-icon');

  this.menuIcon.onmouseup = function () {
    const menuContent = document.getElementById('header__menu-content');
    const visibleClass = 'header__menu-content--visible';

    utils.toggleClass(menuContent, visibleClass);
  };
};

module.exports = MobileMenu;
