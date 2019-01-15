/**
 * BackToTop component JS
 */
import {addBackToTop} from 'vanilla-back-to-top';

export default {
  mounted() {
    addBackToTop({
      diameter: 36,
    });
  },
};
