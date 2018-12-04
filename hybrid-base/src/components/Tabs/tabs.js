/**
 * Tabs component JS
 */

import LastSegment from '../../libraries/lastSegmentUrl';

export default {
  mounted() {
    const href = LastSegment(window.location.pathname);
    document
      .querySelector('a.bottom-nav__action--active')
      .classList.remove('bottom-nav__action--active');

    document.querySelectorAll('a').forEach((item) => {
      if (LastSegment(item) === href) {
        item.classList.add('bottom-nav__action--active');
      }
    });
  },
};
