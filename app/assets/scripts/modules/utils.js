const toggleClass = function (elem, className) {
  if (elem.classList.contains(className)) { elem.classList.remove(className) }
  else { elem.classList.add(className) }
}

module.exports.toggleClass = toggleClass;
