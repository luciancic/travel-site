const utils = require('./utils');

const MobileMenu = function () {
  this.menuIcon = document.getElementById('header__menu-icon');

  this.menuIcon.onmouseup = function () {
    const menuContent = document.getElementById('header__menu-content');
    const visibleClass = 'header__menu-content--visible';
    utils.toggleClass(menuContent, visibleClass);

    const menuIconTop = document.getElementsByClassName('header__menu-icon__top')[0];
    const xClassTop = 'header__menu-icon__top--x';
    utils.toggleClass(menuIconTop, xClassTop);

    const menuIconMiddle = document.getElementsByClassName('header__menu-icon__middle')[0];
    const xClassMiddle = 'header__menu-icon__middle--x';
    utils.toggleClass(menuIconMiddle, xClassMiddle);

    const menuIconBottom = document.getElementsByClassName('header__menu-icon__bottom')[0];
    const xClassBottom = 'header__menu-icon__bottom--x';
    utils.toggleClass(menuIconBottom, xClassBottom);
  };
};

module.exports = MobileMenu;
