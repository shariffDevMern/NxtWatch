function snakeToCamel(snakeStr) {
  return snakeStr.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function convertKeysToCamelCase(arr) {
  return arr.map(obj => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
      const camelCaseKey = snakeToCamel(key);
      newObj[camelCaseKey] = obj[key];
    });
    return newObj;
  });
}

// Example usage:
const data = [
  { first_name: 'John', last_name: 'Doe' },
  { user_id: 123, user_age: 30 },
];

export default convertKeysToCamelCase;
