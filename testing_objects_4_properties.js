// Sometimes it is useful to check if the property of a given object exists or not. 


function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
  return "Not Found"
  }
}
// Test your code by modifying these values
checkObj("gift");
