"use strict";
const percom = require("../index");

// eslint-disable-next-line no-undef
describe("index.js", () => {
    // eslint-disable-next-line no-undef
    it("per-num-1", () => {
        percom.per([2, 4, 2, 6], 2);
    });
    // eslint-disable-next-line no-undef
    it("per-num-2", () => {
        percom.per([1, 2, 3, 4, 5, 6, 7, 7, 4, 1, 45, 3, 11234, 1, 5, 5, 23, 12, 6, 3,], 3);
    });
    // eslint-disable-next-line no-undef
    it("per-str-1", () => {
        percom.per(["H", "e", "l", "l", "o"], 2);
    });
    // eslint-disable-next-line no-undef
    it("per-str-2", () => {
        percom.per(["JavaScript", "TypeScript", "Ruby", "C++", "Java", "Python", "GO", "C#", "Perl", "COBOL", "Dart", "C", "Objective-C", "Elm"], 3);
    });
    // eslint-disable-next-line no-undef
    it("com-num-1", () => {
        percom.com([2, 3, 4, 2], 3);
    });
    // eslint-disable-next-line no-undef
    it("com-num-2", () => {
        percom.com([34, 64, 234, 2, 5, 8, 57, 67, 90, 23324, 54], 4);
    });
    // eslint-disable-next-line no-undef
    it("com-str-1", () => {
        percom.per(["B", "y", "e"], 2);
    });
    // eslint-disable-next-line no-undef
    it("com-str-2", () => {
        percom.per(["HTML", "CSS", "SCSS", "PHP", "Kotlin", "Swift", "SQL", "BASIC", "F#", "Haskell", "Limbo", "Pascal", "Modula"], 2);
    });
});
