const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
console.log(findMatching(drivers,"Bobby"))
console.log(findMatching(drivers,"Sammy"))
console.log(findMatching(drivers,"dawood"))

function fuzzyMatch(drivers, query) {
    const queryLower = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(queryLower));
  } 
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  
  