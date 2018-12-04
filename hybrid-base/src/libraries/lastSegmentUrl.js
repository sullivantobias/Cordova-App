export default function(item) {
  if (item instanceof Element) {
    if (item.getAttribute('href')) {
      return item.href.substr(item.href.lastIndexOf('/') + 1);
    }
  } else return item.substr(item.lastIndexOf('/') + 1);
}
