//calculates which results to show based on number to be displayed and page number
export function whichPage(pageNumber, display, arr) {
  // console.log("---------------------------------------");
  // console.log("array: ", arr);
  // console.log("numberDisplayed: ", display);
  // console.log("pageNumber: ", pageNumber);
  if (arr.length === 0) {
    return arr.slice(0, display);
  }

  if (arr.length <= display) {
    return arr.slice(0, display);
  }

  const firstResult = (pageNumber - 1) * display;
  // console.log("firstResult: ", firstResult);
  const lastResult = pageNumber * display;
  // console.log("lastResult: ", lastResult);

  const array = arr.slice(firstResult, lastResult);
  // console.log("slicedArray: ", array);
  return array;
}

//calculates the number of buttons to be displayed to user and numbers them
export function numbersOnButtons(array, toDisplay) {
  const noButtons = Math.ceil(array.length / toDisplay);
  let arr = [];

  for (let i = 0; i < noButtons; i++) {
    arr.push(i);
  }
  return arr;
}
