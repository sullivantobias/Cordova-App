/**
 * thumbnail component JS
 */

import data from '../../dataset/system-solar-planets.json';

import Truncate from '../../libraries/truncate';

export default {
  data() {
    return {
      cards: [],
    };
  },

  created() {
    for (let prop in data.sections) {
      let planets = { title: '', url: '', overview: '' };

      planets.title = prop;

      planets.url = require(`../../assets/${prop}.jpg`);

      planets.overview = Truncate(data.sections[prop][0].Overview, 18);

      this.$data.cards.push(planets);
    }
  },
};
