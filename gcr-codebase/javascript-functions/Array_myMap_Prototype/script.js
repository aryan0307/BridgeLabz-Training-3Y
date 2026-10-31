// Add a map-like method to every array through Array.prototype.
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback, thisArg) {
        if (this == null) throw new TypeError("myMap called on null or undefined.");
        if (typeof callback !== "function") throw new TypeError("Callback must be a function.");

        const source = Object(this);
        const length = source.length >>> 0;
        const result = new Array(length);

        for (let index = 0; index < length; index++) {
            // Match map(): skip empty slots in sparse arrays.
            if (index in source) {
                result[index] = callback.call(thisArg, source[index], index, source);
            }
        }
        return result;
    };
}

function displayResult() {
    const numbers = [1, 2, 3];
    const doubled = numbers.myMap(number => number * 2);
    const result = `[${numbers}]\\nmyMap result: [${doubled}]`;
    document.getElementById("output").textContent = result;
    console.log(doubled);
}
document.getElementById("runButton").addEventListener("click", displayResult);
