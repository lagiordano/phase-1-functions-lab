// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(pickUpLocation - 42);
}



function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
   
}



function distanceTravelledInFeet(pickUpLocation, destination) {
    return Math.abs(pickUpLocation - destination) * 264;
}



function calculatesFarePrice(pickUpLocation, destination) {
    if (distanceTravelledInFeet(pickUpLocation, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(pickUpLocation, destination) > 400 && distanceTravelledInFeet(pickUpLocation, destination) <2000) {
        return (distanceTravelledInFeet(pickUpLocation, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(pickUpLocation, destination) > 2000 && distanceTravelledInFeet(pickUpLocation, destination) < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
    
}

