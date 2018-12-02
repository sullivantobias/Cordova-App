/**
 * thumbnail component JS
 */

import data from '../../dataset/system-solar-planets.json';

export default {
  data() {
    return {
      cards: [],
    };
  },

  created() {
    for (let prop in data.sections) {
      let planetes = { title: '', url: '' };

      planetes.title = prop;

      planetes.url = require(`../../assets/${prop}.jpg`);

      this.$data.cards.push(planetes);
    }
  },
};
