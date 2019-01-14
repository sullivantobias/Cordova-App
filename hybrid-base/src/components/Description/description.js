import {planetsInformations} from '../../libraries/planetsInformation';

import Scroll from 'zenscroll';

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

    const acc = document.querySelectorAll(".accordion");

    acc.forEach((item) => {
      item.addEventListener("click", function () {

        const defaultDuration = 700;
        const edgeOffset = 130;
        Scroll.setup(defaultDuration, edgeOffset);

        setTimeout(() => {
          Scroll.to(this);
        }, 80);

        const panel = this.nextElementSibling;
        if (panel.style.height) {
          panel.style.height = null;
          this.classList.remove('active');
          this.firstElementChild.classList.remove('active');
        } else {
          acc.forEach((element) => {
            element.nextElementSibling.style.height = null;
            element.classList.remove('active');
            element.firstElementChild.classList.remove('active');
          });
          this.classList.add('active');
          console.log(this.firstElementChild.classList)
          this.firstElementChild.classList.remove('active');
          this.firstElementChild.classList.add('active');
          panel.style.height = panel.scrollHeight + "px";
        }
      });
    })

  }
  ,
};
