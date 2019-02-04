import {planetsInformations} from '../../libraries/planetsInformation';

import Scroll from 'zenscroll';
import {ELEMENTS} from "../../global/allowedElements";
import {allowingElement} from "../../libraries/allowingElement";

/**
 * Description component JS
 */
export default {
  data() {
    return {
      planet: {},
      depthTable: {
        distance: {
          title: '',
          value: ''
        },
        mass: {
          title: '',
          value: ''
        },
        surfaceTemperature: {
          title: '',
          value: ''
        },
        volume: {
          title: '',
          value: ''
        },
      },
      numberOfSatellites: 0,
      namesOfSatellites: [],
      
      ELEMENTS
    };
  },

  mounted() {
    const that = this;
    window.scrollTo(0, 0);


    const planetsInfos = new planetsInformations();
    planetsInfos.createCards();

    this.planet = planetsInfos.specificPlanet(
      window.location.hash.split('-')[2]
    );

    const acc = document.querySelectorAll(".accordion");

    acc.forEach((item) => {
        item.addEventListener("click", function () {

          const defaultDuration = 700;
          const edgeOffset = 130;
          Scroll.setup(defaultDuration, edgeOffset);

          setTimeout(() => {
            Scroll.to(this);
          }, 100);

          const panel = this.nextElementSibling;
          const saveHeight = that.saveHeight(this.parentElement);

          if (panel.style.height) {
            panel.style.height = null;
            this.classList.remove('active');
            this.firstElementChild.classList.remove('active');

            document.querySelectorAll('.panel').forEach((item) => {
              item.style.height = null;
            })
          } else {
            acc.forEach((element) => {
              element.nextElementSibling.style.height = null;
              element.classList.remove('active');
              element.firstElementChild.classList.remove('active');
            });

            this.classList.add('active');
            this.firstElementChild.classList.add('active');
            panel.style.height = panel.scrollHeight + "px";
          }

          if (this.parentElement.classList.contains('panel')) {
            if (this.classList.contains('active')) {
              const allHeight = parseInt(panel.style.height, 10) + parseInt(saveHeight, 10) + 'px'
              this.parentElement.style.height = allHeight;
            } else {
              this.parentElement.style.height = 481 + "px"
            }
          }
        });
      }
    )
    ;

    /** create the table for depth informations **/
    this.createTable();
  },

  methods: {
    createTable() {
      this.depthTable.distance.title = this.planet.depth.distance.title;
      this.depthTable.distance.value = this.planet.depth.distance.value;

      this.depthTable.mass.title = this.planet.depth.mass.title;
      this.depthTable.mass.value = this.planet.depth.mass.value;

      this.depthTable.surfaceTemperature.title = this.planet.depth.surfaceTemperature.title;
      this.depthTable.surfaceTemperature.value = this.planet.depth.surfaceTemperature.value;

      this.depthTable.volume.title = this.planet.depth.volume.title;
      this.depthTable.volume.value = this.planet.depth.volume.value;

      this.numberOfSatellites = this.planet.satellites.nb;
      this.namesOfSatellites = this.planet.satellites.names;
    }
    ,
    saveHeight(el) {
      let tempHeight = 0;
      el.childNodes.forEach((item) => {
        if (item.className === "accordion") {
          tempHeight = el.style.height
        }
      });
      return tempHeight;
    }
    ,
    allowingElement
  }
  ,
}
;
