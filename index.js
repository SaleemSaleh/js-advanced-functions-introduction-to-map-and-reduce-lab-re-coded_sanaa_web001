// Your code here

function mapToNegativize(sourceArray) {
   return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
   return sourceArray.map(x => x );
}

function mapToDouble(sourceArray) {
   return sourceArray.map(x => x * 2 );
}

function mapToSquare(sourceArray) {
   return sourceArray.map(x => x *  x);
}


function reduceToTotal(sourceArray, startingPoint = 0) {
const reducer = (accumulator, currentValue) => accumulator + currentValue;

<<<<<<< HEAD
  return  startingPoint +  sourceArray.reduce(reducer);
=======
  return    sourceArray.reduce(reducer,startingPoint);
>>>>>>> c74025c16055dd35a1297bf7416420110272e605

}

function reduceToAllTrue(sourceArray) {
<<<<<<< HEAD
    return sourceArray.reduce((acc, val) => acc && Boolean(val), true);
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc || Boolean(val));
=======
const reducer = (accumulator, currentValue) => return accumulator + currentValue;

  return   sourceArray.reduce(reducer);

>>>>>>> c74025c16055dd35a1297bf7416420110272e605
}
