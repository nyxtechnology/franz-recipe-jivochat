'use strict';
module.exports = Franz => {
  const getMessages = function getMessages() {
    let directMessages = 0;
    let indirectMessages = 0;

    // Each test is done in order of least accurate (but most robust)
    // -> most accurate (but least robust)
    // for reliability of at least getting a result

    if (document.querySelector('[data-qa-id="side-menu-item-inbox-badge"]')) {
      indirectMessages = parseInt(document.querySelector('[data-qa-id="side-menu-item-inbox-badge"] span').innerHTML)
    }

    // if (document.querySelectorAll('[data-qa-id="avatar"]')) {
    //   directMessages = parseInt(document.querySelector('[data-qa-id="avatar"] span').innerHTML)
    // }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(directMessages)) {
      directMessages = 0;
    }
    if (isNaN(indirectMessages)) {
      indirectMessages = 0;
    }

    // set Franz badge
    Franz.setBadge(indirectMessages);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};