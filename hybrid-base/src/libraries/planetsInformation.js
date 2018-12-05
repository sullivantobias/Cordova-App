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
      let planets = { title: '', url: '', overview: '' };

      planets.title = prop;
      planets.url = require(`../assets/${prop}.jpg`);

      if (objectToFill) {
        planets.overview = Truncate(data.sections[prop][0].Overview, 18);
        objectToFill.push(planets);
      } else {
        planets.overview = data.sections[prop][0].Overview;
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
