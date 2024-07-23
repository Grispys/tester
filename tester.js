// const addPeriod = (str) => {
//     // return str + ".";
//     return str.endsWith(".")?str: `${str}.`;
//   };
   
//   const actual = addPeriod("Hello World");
//   const expected = "Hello Word.";
   
//   try {
//     if (actual !== expected) {
//       throw new Error("Test failed");
//     }
//   } catch (err) {
//     console.error("Error is" + err);
//   }
   
const getFullName = (fName, lName) => {
    return `${fName}${lName}`;
}

const actualFullName = getFullName("bob", "bobner");
const expected = "bobbobner"

if (actualFullName !== expected) {
    throw new error (`${actualFullName} does not compute.`)
}