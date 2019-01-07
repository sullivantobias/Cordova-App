/**
 * PreviousArrow component JS
 */

import { ELEMENTS } from '../../global/allowedElements';

export default {
  data() {
    return {
      ELEMENTS,
    };
  },
  methods: {
    test() {
      ELEMENTS.pageStatePrevious.forEach((item) => (item.allow = true));
      ELEMENTS.pageStateCurrent.forEach((item) => (item.allow = false));

      setTimeout(() => {
        if (!window.location.hash.split('-')[1]) {
          ELEMENTS.previous.allow = false;
        }
      }, 0);
    },
  },
};
