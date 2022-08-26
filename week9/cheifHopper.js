function chiefHopper(arr) {
  // Write your code here
  let minEnergy = Math.min(...arr);
  let maxEnergy = Math.max(...arr);
  let minEnergyFlag = false;
  for (let energy = 1; energy <= maxEnergy; energy++) {
    minEnergyFlag = false;
    let localEnergy = energy;
    for (let i = 0; i < arr.length; i++) {
      localEnergy = 2 * localEnergy - arr[i];
      if (localEnergy < 0) {
        minEnergyFlag = true;
        break;
      }
    }
    if (!minEnergyFlag) {
      return energy;
    }
  }
}
