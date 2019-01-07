import { planetsInformations } from '../../libraries/planetsInformation';
import lightbox from 'rqrauhvmra__tobi';
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
    const lnb = new lightbox();
    window.scrollTo(0, 0);

    const planetsInfos = new planetsInformations();
    planetsInfos.createCards();

    this.planet = planetsInfos.specificPlanet(
      window.location.hash.split('-')[2]
    );
  },
};
