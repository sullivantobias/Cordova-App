/**
 * thumbnail component JS
 */

import { planetsInformations } from '../../libraries/planetsInformation';

import { allowingElement } from '../../libraries/allowingElement';

import { ELEMENTS } from '../../global/allowedElements.js';

export default {
  data() {
    return {
      cards: [],

      ELEMENTS,
    };
  },

  created() {
    this.loadCard();
  },

  mounted() {
    this.activeThumbnail();
  },

  methods: {
    loadCard() {
      const planetsInfos = new planetsInformations();
      planetsInfos.createCards(this.$data.cards);
    },
    activeThumbnail() {
      document.querySelectorAll('.thumbnail a h4').forEach((element) => {
        const urlSegment = element.innerHTML;

        element.parentNode.parentNode.parentNode.setAttribute(
          'href',
          element.parentNode.parentNode.parentNode.getAttribute('href') +
            '-' +
            urlSegment
        );
      });
    },
    allowingElement,
  },
  
};
