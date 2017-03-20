export const omitBy = (object, filter) => {
  const newObj = {};
  for (const key in object) {
    const value = object[key];
    if (!filter(value, key)) {
      newObj[key] = value; 
    }
  }
  return newObj;
};