/**
 * BackToTop component JS
 */
import {addBackToTop} from 'vanilla-back-to-top';

export default {
  data() {
    return {};
  },
  mounted() {
    addBackToTop({
      diameter: 36,
    });
  },
};
