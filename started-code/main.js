"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(5));
        var word1 = " FSD";
        console.log(word.concat(" FSD"));
        var wslice = word.slice(2, 5);
        console.log(wslice);
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split(" ").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || str[i].toLowerCase() == 'u') {
                count++;
            }
        }
        console.log(count);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var flag = false;
        for (var i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                console.log(num + " is a PRIME NUMBER !!");
            }
        }
        console.log(num + " is not a PRIME NUMBER !!");
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 == 1) {
            console.log(num + " is a MAGIC NUMBER !!");
        }
        else {
            console.log(num + " is a not a MAGIC NUMBER !!");
        }
    };
    return NumbersManipulations;
}());
var word = "FullStackDevelopment";
var obj1 = new StringManipulations();
obj1.print(word);
obj1.printWithSpace(word);
obj1.findVowel(word);
var num = 199;
var obj2 = new NumbersManipulations();
obj2.findPrime(num);
obj2.findMagic(num);
