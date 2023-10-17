// Even numbers set: {2, 4, 6, 8, 10}
const evenSet = new Set([2, 4, 6, 8, 10]);

// Odd numbers set: {1, 3, 5, 7, 9}
const oddSet = new Set([1, 3, 5, 7, 9]);

// Union of the sets (all unique elements from both sets)
const unionSet = new Set([...evenSet, ...oddSet]);
console.log('Union Set:', unionSet);

// Intersection of the sets (common elements in both sets)
const intersectionSet = new Set([...evenSet].filter(x => oddSet.has(x)));
console.log('Intersection Set:', intersectionSet);

// Elements that are only in the even numbers set
const evenOnlySet = new Set([...evenSet].filter(x => !oddSet.has(x)));
console.log('Elements only in the even numbers set:', evenOnlySet);

// Elements that are only in the odd numbers set
const oddOnlySet = new Set([...oddSet].filter(x => !evenSet.has(x)));
console.log('Elements only in the odd numbers set:', oddOnlySet);
