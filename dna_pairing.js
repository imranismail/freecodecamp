/**
 * The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.
 * @param  {String} str Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * @return {Array}     Return the provided character as the first element in each array.
 */
function pair(str) {
  "use strict";
  var
    result,
    toBePaired = str.split(""),
    lookupTable = {
      G: "C",
      A: "T",
      C: "G",
      T: "A"
    };

  result = toBePaired.map(function(element) {
    if (lookupTable.hasOwnProperty(element)) {
      return [element, lookupTable[element]];
    } else {
      return [element, "No pairing element found"];
    }
  });

  console.log(result);
  return result;
}

pair("CTAGB");
