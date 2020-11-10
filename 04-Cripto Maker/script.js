
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const special = "* $ & %"
//STEP-1 AND 2
function criptoIdMaker(num) {
  let criptoId = [];
  let alphaNumeric = numeric.concat(alpha.split(" ")).concat(special.split(' '));
  for (i = 0; i < num; i++) {
    random = Math.floor(Math.random() * alphaNumeric.length);
    criptoId.push(alphaNumeric[random]);
  }
  return criptoId.join("");
}

givenId = criptoIdMaker(16);

console.log(givenId);

//STEP-3
//version 1
function criptoArray1(data) {
  let arr = data.split('');
  console.log(arr);
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] % 1 === 0) {   //
        arr[i] = arr[i] + "-"
      }
    }
    return arr.join("");
  }

console.log(criptoArray1(givenId));

// version 2
function criptoArray2(data) {
  let arr = data.toString().split('');
    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0 ; j < numeric.length ; j++) {
        if (parseFloat(arr[i]) === numeric[j]) {
          arr[i] = Number(arr[i]) + "-"
      }
      }
    }
    return arr.join("");
  };

console.log(criptoArray2(givenId));


//version3
function criptoArray3(data) {
  let arr = data.toString().split('');
  // let evenNum = arr.filter(number => number%2 === 0);
  numeric.forEach(element => {
    for (i = 0; i < arr.length - 1; i++) {
      //if (arr[i] === element.toString() && arr[i] % 1 === 0) {   //
      if (arr[i] === element.toString()) {   //
        arr[i] = Number(arr[i]) + "-"
      }
    }
  });
  return arr.join("");
}
console.log(criptoArray3(givenId));


//STEP-4
givenUnwanted = "3 , * , j , q , z"

// version1
function idControl(data, unwantedArr) {
  let arr = data.toString().split('');
  let unArr = unwantedArr.toString().split('');

    unArr.forEach(item => {
      for (i = 0 ; i < arr.length-1 ; i++) {
        if (arr[i] === item) {
          //arr[i] = ""
          arr.splice(i, 1);
      }
      }
    });
    return arr.join("");
  }

console.log(idControl(givenId,givenUnwanted));

//version2
function idControl2(data, unwantedArr) {
  let arr = data.toString().split('');
  let unArr = unwantedArr.toString().split('');

    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0 ; j < unArr.length ; j++) {
        if (arr[i] === unArr[j]) {
          //arr[i] = ""
          arr.splice(i, 1);
      }
      }
    }
    return arr.join("");
  };

console.log(idControl2(givenId,givenUnwanted));

