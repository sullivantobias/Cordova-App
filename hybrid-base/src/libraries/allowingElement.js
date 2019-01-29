import {ELEMENTS} from '../global/allowedElements';

export const allowingElement = (element) => {
  ELEMENTS.pageStatePrevious = [];
  ELEMENTS.pageStateCurrent = [];

  for (const key in ELEMENTS) {
    if (ELEMENTS.hasOwnProperty(key)) {
      if (ELEMENTS[key].allow === true)
        ELEMENTS.pageStatePrevious.push(ELEMENTS[key]);
      ELEMENTS[key].allow = false;
    }
  }

  if (element) {
    ELEMENTS.pageStateCurrent.push(element);
    element.allow = true;
  }

  /**
   * store previous url
   */
  ELEMENTS.previousUrl.url = window.location.hash;

  /** check url after loading rendering
   * allow the previous button to appear
   */
  setTimeout(() => {
    if (window.location.hash.split('-')[1]) {
      ELEMENTS.previous.allow = true;
    }
  }, 0);
};
