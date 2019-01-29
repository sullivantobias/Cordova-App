import {planetsInformations} from '../../libraries/planetsInformation';
import {ELEMENTS} from "../../global/allowedElements";
import {allowingElement} from "../../libraries/allowingElement";

/**
 * Description component JS
 */
export default {
  data() {
    return {
      planet: {},
      ELEMENTS
    };
  },

  mounted() {
    const planetsInfos = new planetsInformations();
    planetsInfos.createCards();

    this.planet = planetsInfos.specificPlanet(
      window.location.hash.split('-')[2]
    );
  },

  methods: {
    allowingElement
  }
  ,
};
