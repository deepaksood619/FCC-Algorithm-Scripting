'use strict';

function pairElement(str) {

    let DNAPairs = []

    for (const item of str) {
        switch (item) {
            case 'A':
                DNAPairs.push(["A", "T"]);
                break;

            case 'T':
                DNAPairs.push(["T", "A"]);
                break;

            case 'C':
                DNAPairs.push(["C", "G"]);
                break;

            case 'G':
                DNAPairs.push(["G", "C"]);
                break;
        }
    }
    return DNAPairs;
}

console.log(pairElement("GCG"));