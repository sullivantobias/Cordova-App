import data from '../dataset/system-solar-planets.json';

import Truncate from './truncate';

/**
 * @class planetsInformations
 */
export class planetsInformations {
  /**
   * @constructor
   */
  constructor() {
    this.listOfPlanets = [];
  }

  /**
   *
   * @param {*} objectToFill
   */
  createCards(objectToFill) {
    for (let prop in data.sections) {
      let planets = {
        title: '',
        url: '',
        overview: '',
        depth: {
          distance: {title: '', value: ''},
          mass: {title: '', value: ''},
          surfaceTemperature: {title: '', value: ''},
          volume: {title: '', value: ''}
        }
      };

      planets.title = prop;
      planets.url = require(`../assets/${prop}.jpg`);

      if (objectToFill) {
        /** retrieve overview **/
        planets.overview = Truncate(data.sections[prop][0].Overview, 18);

        /** push all planets **/
        objectToFill.push(planets);

        // console.log(planets)
      } else {
        planets.overview = data.sections[prop][0].Overview;

        /** retrieve depth informations **/
        planets.depth.distance.title = data.sections[prop][1].key;
        planets.depth.distance.value = data.sections[prop][1].val;

        planets.depth.mass.title = data.sections[prop][2].key;
        planets.depth.mass.value = data.sections[prop][2].val;

        planets.depth.surfaceTemperature.title = data.sections[prop][3].key;
        planets.depth.surfaceTemperature.value = data.sections[prop][3].val;

        planets.depth.volume.title = data.sections[prop][4].key;
        planets.depth.volume.value = data.sections[prop][4].val;

        this.listOfPlanets.push(planets);
      }
    }
  }

  /**
   *
   * @param {*} specificPlanet
   */
  specificPlanet(specificPlanet) {
    let element;
    this.listOfPlanets.forEach((el) => {
      if (el.title === specificPlanet) {
        element = el;
      }
    });
    return element;
  }
}
