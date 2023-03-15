//HQ is on 42nd street. Blocks will equal the distsance betwee
//the destination block and 42nd steert

//A block is 264 feet
const numFeetInABlock = 264;

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  return distanceInBlocks * numFeetInABlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * numFeetInABlock;
}

function calculatesFarePrice(startBlock, endBlock) {
  const travelDistanceFeet = distanceTravelledInFeet(startBlock, endBlock);
  switch (true) {
    case travelDistanceFeet <= 400:
      return 0;
    case travelDistanceFeet <= 2000:
      return (travelDistanceFeet - 400) * 0.02;
    case travelDistanceFeet <= 2500:
      return 25;
    default:
      return 'cannot travel that far'

  }
}