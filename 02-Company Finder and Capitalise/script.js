
// Filter out companies which have more than one 'o' without the filter method

const firms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, Oppo"

// version 1

function calculate(arr) {

  let givenArr = arr.split(",")
  
  let firmsWithDoubleO = [];

  for (i = 0; i < givenArr.length; i++) {
    let eachWordArr = givenArr[i].toLowerCase().split('');  // you dont need to make array
    let num = 0;
    for (j = 0; j < eachWordArr.length; j++) {
      if (eachWordArr[j] === "o") {
        num++;
        if (num === 2) {
          firmsWithDoubleO.push(givenArr[i])
        }
      }
    }
  }
  return firmsWithDoubleO;
}
console.log(calculate(firms));


//version with forEach
function calculate2(arr) {

  let givenArr = arr.split(",")
  
  let firmsWithDoubleO = [];

  givenArr.forEach(element => {

    let num = 0;

    for (i = 0; i < element.length; i++) {
      if (element[i].toLowerCase() === "o") {
        num++;
        if (num === 2) {
          firmsWithDoubleO.push(element)
        }
      }
    }
    }); 
    return firmsWithDoubleO;
  }

// Display strings
console.log(calculate2(firms));


//STEP-2

 loremIpsum = "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.a.32 and 1.a.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. this book is a treatise on the theory of ethics, very popular during the Renaissance. the first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.a.32"

 function changeUpper(data) {

  let arr = data.split(" ")
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i][arr[i].length-1] === ".") {
        arr[i+1] = arr[i+1][0].toUpperCase() + arr[i+1].substring(1);  // alternative + arr[i+1].slice(1)
      }
    }
    return arr.join(' ');
  }

console.log(changeUpper(loremIpsum));