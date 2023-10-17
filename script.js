const colorsSet = new Set(['red', 'blue', 'green', 'yellow', 'purple']);

function removeColor(color) {
  colorsSet.delete(color);
}

console.log('Colors before removal:', colorsSet);

// Remove 'green' from the set
removeColor('green');

console.log('Colors after removal:', colorsSet);
