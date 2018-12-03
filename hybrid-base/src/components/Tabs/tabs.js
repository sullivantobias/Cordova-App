/**
 * Tabs component JS
 */

export default {
  methods: {
    activeTabs(element) {
      document
        .querySelector('.bottom-nav__action--active')
        .classList.remove('bottom-nav__action--active');
      console.log(element);
      element.classList.add('bottom-nav__action--active');
    },
  },
};
