function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    for (item in collection) {
        var found = 0;
        for (var source_item in source) {

            if (collection[item].hasOwnProperty(source_item) && collection[item][source_item] == source[source_item]) {
                found++;
            }

        }
        if (found == Object.keys(source).length) {
            arr = arr.concat(collection[item]);
        }
    }

    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{
    "a": 1,
    "b": 2
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2,
    "c": 2
}], {
    "a": 1,
    "b": 2
}));