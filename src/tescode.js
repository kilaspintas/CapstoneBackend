let result = {}; // Initialize an empty object

for (let i = 0; i < 5; i++) {
  const key = 'key' + (i + 1); // Assuming you have some keys for the object
  const values = [i, i + 1, i + 2]; // Assuming you have multiple values for each key

  result[key] = values; // Assign the array of values to the object property
}

console.log(result);
