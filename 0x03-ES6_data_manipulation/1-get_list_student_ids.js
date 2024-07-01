export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) return [];
  const arrayOfIds = arrayOfObjects.map((object) => object.id);
  return arrayOfIds;
}
