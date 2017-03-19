export const omitBy = (object, filter) => {
  const newObj = {};
  for (let key of Object.keys(object)) {
    const value = object[key];
    if (!filter(value, key)) {
      newObj[key] = value; 
    }
  }
  return newObj;
};

export const mapObject = (object, transformer) => {
  const array = [];
  for (let key of Object.keys(object)) {
    array.push(transformer(object[key], key));
  }
  return array;
};