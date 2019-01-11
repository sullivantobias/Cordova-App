import {planetsInformations} from '../../libraries/planetsInformation';

var SimpleLightbox = require('simple-lightbox');
/**
 * Description component JS
 */

export default {
  data() {
    return {
      planet: {},
    };
  },

  mounted() {


    window.scrollTo(0, 0);

    const planetsInfos = new planetsInformations();
    planetsInfos.createCards();

    this.planet = planetsInfos.specificPlanet(
      window.location.hash.split('-')[2]
    );

    const lnb = new SimpleLightbox({elements: '.lightbox a'});
  },
};
