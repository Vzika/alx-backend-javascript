/*
 * Run "npm run dev maintest/1-main.js" to test
*/
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  return sizes.map((size) => new ClassRoom(size));
}
