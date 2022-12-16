export function getElem(cssSelector) {
  return document.querySelector(cssSelector);
}

export function getElems(cssSelector) {
  return document.querySelectorAll(cssSelector);
}

export function appendBody(node) {
  document.body.appendChild(node);
}

export function createElement({tagName, id = '', classNames = '', data = {}}) {
  const newElement = document.createElement(tagName);
  if (classNames.length > 0) newElement.classList.add(classNames);
  if (id.length > 0) newElement.id = id;

  if (typeof(data) === 'object' && Object.entries(data).length > 0) {
    Object.entries(data).forEach(keyValue => {
      const [key, value] = keyValue;
      newElement.dataset[key] = value;
    });
  }

  return newElement;
}