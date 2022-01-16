export function navigateTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
}

export const createArray = (arrayLength) => {
  const array = [];
  for (let i = 1; i <= arrayLength; i += 1) {
    array.push(i);
  }
  return array;
};

export const getStyles = (styles) => styles.replace(/\s*.*(?={\n)/g, '').replace(/\n}/g, '').replace(/{\n/g, '').trim();
export const stringToStyleObject = (string) => {
  const styleObject = {};
  const styleArray = string.split(';');
  styleArray.forEach((style) => {
    const [key, value] = style.split(':');
    styleObject[key] = value;
  });
  return styleObject;
};

/**
 * @param {String} key
 * @param {Object} value
 */
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @param {String} key
 * @returns {Object | null}
 */
export const getLocalStorage = (key) => {
  const localStorageValue = localStorage.getItem(key);
  return JSON.parse(localStorageValue);
};
