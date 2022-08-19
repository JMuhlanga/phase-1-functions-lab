// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if(someValue >42){
        return someValue - 42;
    }else if(someValue <=42){
        return 42 - someValue;
    }  
  }

function distanceFromHqInFeet(someValue) {    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,    
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks       
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    let newVal = distanceFromHqInBlocks(someValue);
    return newVal * 264 ; 

  }

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(destination > start){
        const someVal = destination - start;
        return someVal * 264;
    }else if(destination <= start){
        const someVal = start - destination;
        return someVal * 264;
    }
  }

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const newVal = distanceTravelledInFeet(start, destination);

    if(newVal >= 400 && newVal < 2000){
        const n1Val = newVal - 400;
        return n1Val * 0.02 ; 
    }else if(newVal >=2000 && newVal < 2500){
        return 25 ;
    }else if(newVal >=2500){
        return `cannot travel that far`;
    }else{
        return 0;
    } 
  }