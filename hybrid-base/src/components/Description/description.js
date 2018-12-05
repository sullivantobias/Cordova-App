import { planetsInformations } from '../../libraries/planetsInformation';
import LastSegmentUrl from '../../libraries/lastSegmentUrl';

/**
 * Tabs component JS
 */

export default {
  data() {
    return {
      planet: {},
    };
  },

  mounted() {
    const planetsInfos = new planetsInformations();

    planetsInfos.createCards();

    this.$data.planet = planetsInfos.specificPlanet(
      LastSegmentUrl(window.location.pathname)
    );
    console.log(this.$data.planet);
  },
};
