/**
 * Tabs component JS
 */

export default {
  data() {
    return {
      Title: 'Planetae',
      Reference: '',
    };
  },
  mounted() {
    const currentPage = window.location.pathname.replace(/^\/+|\/+$/g, '');
    this.$data.Reference =
      currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  },
};
