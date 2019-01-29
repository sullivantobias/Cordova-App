import data from '../dataset/system-solar-planets.json';

import Truncate from './truncate';
import {ELEMENTS} from "../global/allowedElements";

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
        },
        moreInDepth: {},
        satellites: {
          nb: 0,
          names: []
        }
      };

      planets.title = prop;
      planets.url = require(`../assets/${prop}.jpg`);

      if (objectToFill) {
        /** retrieve overview **/
        planets.overview = Truncate(data.sections[prop][0].Overview, 18);

        /** push all planets **/
        objectToFill.push(planets);
      } else {
        planets.overview = data.sections[prop][0].Overview;

        if (data.sections[prop][0].Moons) {
          planets.satellites.nb = data.sections[prop][0].Moons.length;

          data.sections[prop][0].Moons.forEach((item) => {
            planets.satellites.names.push(item);
          })
        }

        /** retrieve depth informations **/
        let i = 1;
        for (const element in planets.depth) {
          if (planets.depth.hasOwnProperty(element)) {
            planets.depth[element].title = data.sections[prop][i].key;
            planets.depth[element].value = data.sections[prop][i].val;
            i++;
          }
        }

        /** retrieve moreInDepth informations **/
        if (data.sections[prop][5]) {
          planets.moreInDepth = data.sections[prop][5].moreInDepth;
        }
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
