import { ELEMENTS } from '../global/allowedElements';

export const allowingElement = (element) => {
  for (const key in ELEMENTS) {
    if (ELEMENTS.hasOwnProperty(key)) {
      ELEMENTS[key].allow = false;
    }
  }

  element.allow = true;
};
