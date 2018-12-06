import { planetsInformations } from '../../libraries/planetsInformation';

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

    this.planet = planetsInfos.specificPlanet(
      window.location.hash.split('-')[1]
    );
  },
};
