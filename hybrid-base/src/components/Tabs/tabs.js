/**
 * Tabs component JS
 */

import {allowingElement} from '../../libraries/allowingElement';

import {ELEMENTS} from '../../global/allowedElements.js';

export default {
  data() {
    return {
      ELEMENTS,
    };
  },

  methods: {
    activeTabs(element) {
      if (document.querySelector('a.bottom-nav__action--active')) {
        document
          .querySelector('a.bottom-nav__action--active')
          .classList.remove('bottom-nav__action--active');
      }

      if (!element.classList.contains('bottom-nav__action--active'))
        element.classList.add('bottom-nav__action--active');
    },
    allowingElement,
  },
};
