"use strict";

/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) {
  // Write your code here
  let electives = [];
  for (let i = 0; i < petrolpumps.length; i++) {
    let [petrol, distance] = petrolpumps[i];
    if (petrol >= distance) {
      electives.push(i);
    }
  }
  for (let i = 0; i < electives.length; i++) {
    let j = electives[i];
    let petrol = 0;
    let distance = 0;
    while (petrol >= distance) {
      const [_petrol, _distance] = petrolpumps[j];
      petrol += _petrol;
      distance += _distance;
      j++;
      if (j === petrolpumps.length) {
        j = 0;
      }
      if (j === electives[i]) {
        return electives[i];
      }
    }
  }
}
