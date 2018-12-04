/**
 * Tabs component JS
 */

import LastSegment from '../../libraries/lastSegmentUrl';

export default {
  data() {
    return {
      Title: 'Planetae',
      Reference: '',
    };
  },
  mounted() {
    const currentPage = LastSegment(window.location.pathname);

    this.$data.Reference =
      currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  },
};
