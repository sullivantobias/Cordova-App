/**
 * thumbnail component JS
 */

import data from '../../dataset/system-solar-planets.json';
import img from '../../assets/mercury.jpg';

export default {
  data() {
    return {
      imgd: '',
      cards: [],
    };
  },

  created() {
    for (let prop in data.sections) {
      let planetes = { title: '', url: '' };

      planetes.title = prop;
      planetes.url = data.sections[prop][0];

      this.$data.cards.push(planetes);
    }
  },

  mounted() {
    this.$data.imgd = img;
  },
};
