/**
 * returns a string of all the set values that start with a specific string (startString).
 * @param {*Set} set of array values
 * @param {*String} startString to filter the set values
 * @returns a string string contains all the values of the set separated by -.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const parts = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
