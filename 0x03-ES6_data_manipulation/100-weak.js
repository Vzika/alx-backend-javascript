export const weakMap = new WeakMap();

/**
 * Track within the weakMap the number of times queryAPI is called for each endpoint.
 * @param {*Object} endPoint { protocol: 'http', name: 'getUsers' }
 * @author Adam Sanusi Babatunde
 */
export function queryAPI(endPoint) {
  if (weakMap.get(endPoint) + 1) {
    weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  } else {
    weakMap.set(endPoint, 1);
  }
  if (weakMap.get(endPoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  return weakMap;
}
