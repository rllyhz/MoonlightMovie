export const getElem = (cssSelector) => {
  return document.querySelector(cssSelector);
}

export const getElems = (cssSelector) => {
  return document.querySelectorAll(cssSelector);
}

export const appendBody = (node) => {
  document.body.appendChild(node);
}

export const createElement = ({tagName, id = '', classNames = '', dataset = {}, data = {}, styles = {}, shadowElement = false}) => {
  const newElement = document.createElement(tagName);

  if (shadowElement) {
    newElement.attachShadow({ mode: 'open' });
    newElement.display = 'block';
  }

  if (classNames.length > 0) newElement.classList.add(classNames);
  if (id.length > 0) newElement.id = id;

  if (typeof(dataset) === 'object' && Object.entries(dataset).length > 0) {
    Object.entries(dataset).forEach(keyValue => {
      const [key, value] = keyValue;
      newElement.dataset[key] = value;
    });
  }

  if (typeof(styles) === 'object' && Object.entries(styles).length > 0) {
    Object.entries(styles).forEach(keyValue => {
      const [key, value] = keyValue;
      newElement.style[key] = value;
    });
  }

  if (typeof(data) === 'object' && Object.entries(data).length > 0) {
    Object.entries(data).forEach(keyValue => {
      const [key, value] = keyValue;
      newElement[key] = value;
    });
  }

  return newElement;
}