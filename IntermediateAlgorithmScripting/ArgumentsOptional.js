function addTogether() {
    var checkNum = function(num) {
        if (typeof(num) != 'number')
            return undefined;
        else
            return num;
    };

    if (arguments.length == 2) {
        if (checkNum(arguments[0]) && checkNum(arguments[1])) {
            return arguments[0] + arguments[1];
        } else {
            return undefined;
        }
    } else if (arguments.length == 1) {
        var c = arguments[0];

        if (checkNum(c)) {
            return function(arg2) {
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                } else {
                    return c + arg2;
                }
            };
        }
    }
}

console.log(addTogether(2, 3));